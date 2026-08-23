function escapeHtml(text: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export const onRequestPost: PagesFunction<{
  RESEND_API_KEY: string;
  CONTACT_TO_EMAIL: string;
  CONTACT_FROM_EMAIL: string;
}> = async (context) => {
  try {
    const request = context.request;
    
    // 1. Accept JSON only
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return new Response(JSON.stringify({ error: 'Only application/json is accepted' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const body = await request.json() as any;

    // 2. Anti-spam honeypot check
    if (body.website && body.website.trim() !== '') {
      return new Response(JSON.stringify({ success: true, message: 'Submission processed' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 3. Server-side validation
    const { firstName, lastName, email, topic, serviceType, message, agreeToPrivacy, street, zipCode, city, phone, pagePath } = body;

    if (!firstName || typeof firstName !== 'string' || firstName.trim().length < 2 || firstName.length > 100) {
      return new Response(JSON.stringify({ error: 'Der Vorname muss mindestens 2 Zeichen lang sein.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    if (!lastName || typeof lastName !== 'string' || lastName.trim().length < 2 || lastName.length > 100) {
      return new Response(JSON.stringify({ error: 'Der Nachname muss mindestens 2 Zeichen lang sein.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email) || email.length > 150) {
      return new Response(JSON.stringify({ error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    if (!topic || typeof topic !== 'string' || topic.length > 50) {
      return new Response(JSON.stringify({ error: 'Bitte wählen Sie ein gültiges Thema.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    if (!serviceType || typeof serviceType !== 'string' || serviceType.length > 50) {
      return new Response(JSON.stringify({ error: 'Bitte wählen Sie eine gültige Serviceart.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    if (!message || typeof message !== 'string' || message.trim().length < 10 || message.length > 3000) {
      return new Response(JSON.stringify({ error: 'Die Nachricht muss mindestens 10 Zeichen lang sein.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    if (agreeToPrivacy !== true) {
      return new Response(JSON.stringify({ error: 'Sie müssen der Datenschutzerklärung zustimmen.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Optional field validation
    if (street && (typeof street !== 'string' || street.length > 200)) {
      return new Response(JSON.stringify({ error: 'Ungültige Angabe für Straße.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    if (zipCode && (typeof zipCode !== 'string' || zipCode.length > 10)) {
      return new Response(JSON.stringify({ error: 'Ungültige Angabe für PLZ.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    if (city && (typeof city !== 'string' || city.length > 100)) {
      return new Response(JSON.stringify({ error: 'Ungültige Angabe für Stadt.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    if (phone && (typeof phone !== 'string' || phone.length > 30)) {
      return new Response(JSON.stringify({ error: 'Ungültige Angabe für Telefon.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    if (pagePath && (typeof pagePath !== 'string' || pagePath.length > 200)) {
      return new Response(JSON.stringify({ error: 'Ungültige Angabe für Herkunft.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 4. Retrieve environment secrets
    const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = context.env;
    console.log(`Diagnostics: hasResendApiKey=${!!RESEND_API_KEY}, hasContactToEmail=${!!CONTACT_TO_EMAIL}, hasContactFromEmail=${!!CONTACT_FROM_EMAIL}`);
    if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
      console.error(`Missing configuration: hasResendApiKey=${!!RESEND_API_KEY}, hasContactToEmail=${!!CONTACT_TO_EMAIL}, hasContactFromEmail=${!!CONTACT_FROM_EMAIL}`);
      return new Response(
        JSON.stringify({ error: 'Der Server ist vorübergehend nicht konfiguriert. Bitte kontaktieren Sie uns direkt per E-Mail.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 5. Escape and sanitize variables for safe HTML insertion
    const escapedFirstName = escapeHtml(firstName);
    const escapedLastName = escapeHtml(lastName);
    const escapedEmail = escapeHtml(email);
    const escapedTopic = escapeHtml(topic);
    const escapedServiceType = escapeHtml(serviceType);
    const escapedMessage = escapeHtml(message);
    const escapedStreet = street ? escapeHtml(street) : '';
    const escapedZipCode = zipCode ? escapeHtml(zipCode) : '';
    const escapedCity = city ? escapeHtml(city) : '';
    const escapedPhone = phone ? escapeHtml(phone) : 'Nicht angegeben';
    const escapedPagePath = pagePath ? escapeHtml(pagePath) : '/contact';
    
    const formattedAddress = escapedStreet 
      ? `${escapedStreet}${escapedZipCode || escapedCity ? `, ${escapedZipCode} ${escapedCity}`.trim() : ''}`
      : 'Nicht angegeben';

    const timestamp = new Date().toISOString();

    // 6. Construct email subject
    const safeTopic = topic.replace(/[^\w\s-]/gi, '');
    const emailSubject = `Neue Website-Anfrage – Energie Alemi – ${safeTopic}`;
    
    // 7. Construct email plain text body (fallback)
    const emailBody = `Neue Anfrage über das Web-Kontaktformular:
----------------------------------------
Thema: ${topic}
Serviceart: ${serviceType}
Zeitstempel: ${timestamp}
Herkunft: www.energie-alemi.de${pagePath || ''}

Kontaktdaten:
Name: ${firstName} ${lastName}
E-Mail: ${email}
Telefon: ${phone || 'Nicht angegeben'}
Adresse: ${street || 'Nicht angegeben'}${zipCode ? `, ${zipCode}` : ''}${city ? ` ${city}` : ''}

Nachricht:
${message}
----------------------------------------
Diese Nachricht wurde automatisch über das Kontaktformular von www.energie-alemi.de gesendet.`;

    // 8. Construct email HTML body
    const emailHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Neue Website-Anfrage</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #1e293b;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
    <!-- Header -->
    <div style="background-color: #0047AB; padding: 24px; text-align: center; border-bottom: 4px solid #f0a83f;">
      <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: bold; letter-spacing: 0.05em; text-transform: uppercase;">Energie Alemi</h1>
      <p style="color: #e2e8f0; margin: 4px 0 0 0; font-size: 14px;">Neue Website-Anfrage</p>
    </div>
    
    <!-- Body Content -->
    <div style="padding: 24px;">
      <!-- Lead Summary Section -->
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b; width: 30%;"><strong>Thema:</strong></td>
          <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #0f172a;">${escapedTopic}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;"><strong>Serviceart:</strong></td>
          <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #0f172a;">${escapedServiceType}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;"><strong>Zeitstempel:</strong></td>
          <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #0f172a;">${timestamp}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;"><strong>Herkunft:</strong></td>
          <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #0f172a;">www.energie-alemi.de${escapedPagePath}</td>
        </tr>
      </table>

      <!-- Contact Details -->
      <h2 style="font-size: 14px; font-weight: bold; text-transform: uppercase; color: #0047AB; margin: 0 0 12px 0; letter-spacing: 0.05em;">Kontaktdaten</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b; width: 30%;"><strong>Name:</strong></td>
          <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #0f172a; font-weight: 500;">${escapedFirstName} ${escapedLastName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;"><strong>E-Mail:</strong></td>
          <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #0047AB;"><a href="mailto:${escapedEmail}" style="color: #0047AB; text-decoration: none;">${escapedEmail}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;"><strong>Telefon:</strong></td>
          <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #0f172a;">${escapedPhone}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #64748b;"><strong>Adresse:</strong></td>
          <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #0f172a;">${formattedAddress}</td>
        </tr>
      </table>

      <!-- Message -->
      <h2 style="font-size: 14px; font-weight: bold; text-transform: uppercase; color: #0047AB; margin: 0 0 12px 0; letter-spacing: 0.05em;">Nachricht</h2>
      <div style="background-color: #f8fafc; border-left: 4px solid #0047AB; padding: 16px; border-radius: 4px; font-size: 14px; line-height: 1.5; color: #334155; margin-bottom: 24px; white-space: pre-wrap;">${escapedMessage}</div>

      <!-- Action Button -->
      <div style="text-align: center; margin-top: 32px; margin-bottom: 12px;">
        <a href="mailto:${escapedEmail}" style="background-color: #0047AB; border-bottom: 3px solid #003380; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 9999px; font-weight: bold; font-size: 14px; display: inline-block;">Auf E-Mail antworten</a>
      </div>
    </div>
    
    <!-- Footer -->
    <div style="background-color: #f8fafc; padding: 16px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 11px; color: #64748b;">
      Diese Nachricht wurde automatisch über das Kontaktformular von <a href="https://www.energie-alemi.de" style="color: #64748b; text-decoration: underline;">www.energie-alemi.de</a> gesendet.
    </div>
  </div>
</body>
</html>`;

    // 9. Send Request to Resend API
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: CONTACT_TO_EMAIL,
        reply_to: email,
        subject: emailSubject,
        text: emailBody,
        html: emailHtml
      })
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error(`Resend API Error: ${resendResponse.status} - ${errorText}`);
      return new Response(
        JSON.stringify({ error: 'E-Mail-Zustellung fehlgeschlagen. Bitte senden Sie uns eine direkte E-Mail.' }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err: any) {
    console.error(`Contact Form Endpoint Exception: ${err?.message || err}`);
    return new Response(
      JSON.stringify({ error: 'Ein interner Serverfehler ist aufgetreten.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
