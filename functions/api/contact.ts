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
    const { firstName, lastName, email, topic, serviceType, message, agreeToPrivacy, street, zipCode, city } = body;

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

    // 5. Construct Email Content
    const safeTopic = topic.replace(/[^\w\s-]/gi, '');
    const emailSubject = `Neue Website-Anfrage – Energie Alemi (${safeTopic})`;
    
    const emailBody = `Neue Anfrage über das Web-Kontaktformular:
----------------------------------------
Name: ${firstName} ${lastName}
E-Mail: ${email}
Thema: ${topic}
Serviceart: ${serviceType}
Adresse: ${street || 'Nicht angegeben'}${zipCode ? `, ${zipCode}` : ''}${city ? ` ${city}` : ''}
Zeitstempel: ${new Date().toISOString()}

Nachricht:
${message}
----------------------------------------
Diese Nachricht wurde automatisch über das Kontaktformular von www.energie-alemi.de gesendet.`;

    // 6. Send Request to Resend API
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
        text: emailBody
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
