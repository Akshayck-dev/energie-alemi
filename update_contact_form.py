import json
import os

locales_dir = "public/locales"
langs = ["en", "de", "ar", "tr"]

data = {
    "en": {
        "contact": {
            "form_sent_title": "Message Sent!",
            "form_sent_desc": "Thank you for reaching out. We will get back to you as soon as possible.",
            "form_header_sub": "Send us a message",
            "form_header": "How can we help you?",
            "form_fname": "First name",
            "form_lname": "Last name",
            "form_email": "E-mail address",
            "form_topic": "I need help with",
            "form_topic_elec": "Electricity",
            "form_topic_gas": "Gas",
            "form_topic_net": "Internet",
            "form_topic_other": "General question",
            "form_msg": "Your message",
            "form_privacy_text": "By clicking \"Accept\", you agree to our ",
            "form_privacy_link": "privacy policy.",
            "form_btn_sending": "Sending...",
            "form_btn_send": "Send Message"
        }
    },
    "de": {
        "contact": {
            "form_sent_title": "Nachricht gesendet!",
            "form_sent_desc": "Vielen Dank für Ihre Kontaktaufnahme. Wir werden uns so schnell wie möglich bei Ihnen melden.",
            "form_header_sub": "Senden Sie uns eine Nachricht",
            "form_header": "Wie können wir Ihnen helfen?",
            "form_fname": "Vorname",
            "form_lname": "Nachname",
            "form_email": "E-Mail-Adresse",
            "form_topic": "Ich brauche Hilfe bei",
            "form_topic_elec": "Strom",
            "form_topic_gas": "Gas",
            "form_topic_net": "Internet",
            "form_topic_other": "Allgemeine Frage",
            "form_msg": "Ihre Nachricht",
            "form_privacy_text": "Indem Sie auf \"Akzeptieren\" klicken, stimmen Sie unserer ",
            "form_privacy_link": "Datenschutzerklärung zu.",
            "form_btn_sending": "Wird gesendet...",
            "form_btn_send": "Nachricht senden"
        }
    },
    "ar": {
        "contact": {
            "form_sent_title": "تم إرسال الرسالة!",
            "form_sent_desc": "شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.",
            "form_header_sub": "أرسل لنا رسالة",
            "form_header": "كيف يمكننا مساعدتك؟",
            "form_fname": "الاسم الأول",
            "form_lname": "اسم العائلة",
            "form_email": "البريد الإلكتروني",
            "form_topic": "أحتاج مساعدة في",
            "form_topic_elec": "الكهرباء",
            "form_topic_gas": "الغاز",
            "form_topic_net": "الإنترنت",
            "form_topic_other": "سؤال عام",
            "form_msg": "رسالتك",
            "form_privacy_text": "بالنقر على \"قبول\"، فإنك توافق على ",
            "form_privacy_link": "سياسة الخصوصية.",
            "form_btn_sending": "جاري الإرسال...",
            "form_btn_send": "إرسال رسالة"
        }
    },
    "tr": {
        "contact": {
            "form_sent_title": "Mesaj Gönderildi!",
            "form_sent_desc": "Bizimle iletişime geçtiğiniz için teşekkür ederiz. En kısa sürede size geri döneceğiz.",
            "form_header_sub": "Bize mesaj gönderin",
            "form_header": "Size nasıl yardımcı olabiliriz?",
            "form_fname": "Adınız",
            "form_lname": "Soyadınız",
            "form_email": "E-posta adresi",
            "form_topic": "Şu konuda yardıma ihtiyacım var",
            "form_topic_elec": "Elektrik",
            "form_topic_gas": "Gaz",
            "form_topic_net": "İnternet",
            "form_topic_other": "Genel soru",
            "form_msg": "Mesajınız",
            "form_privacy_text": "\"Kabul Et\"e tıklayarak, şunları kabul etmiş olursunuz: ",
            "form_privacy_link": "gizlilik politikası.",
            "form_btn_sending": "Gönderiliyor...",
            "form_btn_send": "Mesaj Gönder"
        }
    }
}

for lang in langs:
    filepath = os.path.join(locales_dir, lang, "translation.json")
    if os.path.exists(filepath):
        with open(filepath, "r") as f:
            current_data = json.load(f)
        
        current_data["contact"].update(data[lang]["contact"])
        
        with open(filepath, "w") as f:
            json.dump(current_data, f, indent=2, ensure_ascii=False)
