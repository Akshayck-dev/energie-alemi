import json
import os

locales_dir = "public/locales"
langs = ["en", "de", "ar", "tr"]

data = {
    "en": {
        "contact": {
            "header_sub": "We are here for you",
            "header_t1": "Let's connect.",
            "header_t2": "We'll take care.",
            "header_desc": "Have questions or need advice? Our friendly team is ready to help you with anything you need. Reach out and we'll get back to you as soon as possible.",
            "f1_t": "Call Anytime",
            "f1_d": "We're just a call away",
            "f2_t": "Quick Response",
            "f2_d": "Usually within 24h",
            "f3_t": "Trusted Support",
            "f3_d": "Reliable. Friendly. Local.",
            "btn_call": "Call us now",
            "btn_msg": "Send us a message",
            
            "info_title": "Contact Information",
            "lbl_phone": "Phone",
            "lbl_email": "E-Mail",
            "lbl_addr": "Address",
            "lbl_hours": "Office Hours",
            "val_hours": "Mon – Sat: 10:00 – 19:00",
            
            "why_title": "Why choose Energie Alemi?",
            "why_f1_t": "Independent & Transparent",
            "why_f1_d": "We provide neutral advice with 100% transparency.",
            "why_f2_t": "Tailored Solutions",
            "why_f2_d": "We find the best tariffs and contracts that perfectly fit your needs.",
            "why_f3_t": "Personal Support",
            "why_f3_d": "We're with you every step of the way – reliable and committed.",
            
            "map_tag": "Aachen, Germany",
            "map_title": "Located in Aachen. Here for you.",
            "map_desc": "Visit us in person or get in touch online — we'll help you find the best solution.",
            "map_btn": "View on map",
            "map_city": "AACHEN"
        }
    },
    "de": {
        "contact": {
            "header_sub": "Wir sind für Sie da",
            "header_t1": "Lassen Sie uns verbinden.",
            "header_t2": "Wir kümmern uns darum.",
            "header_desc": "Haben Sie Fragen oder benötigen Sie Beratung? Unser freundliches Team hilft Ihnen gerne weiter. Melden Sie sich und wir melden uns so schnell wie möglich.",
            "f1_t": "Jederzeit anrufen",
            "f1_d": "Wir sind nur einen Anruf entfernt",
            "f2_t": "Schnelle Antwort",
            "f2_d": "Meistens innerhalb von 24h",
            "f3_t": "Vertrauenswürdiger Support",
            "f3_d": "Zuverlässig. Freundlich. Lokal.",
            "btn_call": "Jetzt anrufen",
            "btn_msg": "Senden Sie uns eine Nachricht",
            
            "info_title": "Kontaktinformationen",
            "lbl_phone": "Telefon",
            "lbl_email": "E-Mail",
            "lbl_addr": "Adresse",
            "lbl_hours": "Öffnungszeiten",
            "val_hours": "Mo – Sa: 10:00 – 19:00",
            
            "why_title": "Warum Energie Alemi?",
            "why_f1_t": "Unabhängig & Transparent",
            "why_f1_d": "Wir beraten neutral und mit 100%iger Transparenz.",
            "why_f2_t": "Maßgeschneiderte Lösungen",
            "why_f2_d": "Wir finden die besten Tarife und Verträge, die perfekt zu Ihnen passen.",
            "why_f3_t": "Persönlicher Support",
            "why_f3_d": "Wir begleiten Sie bei jedem Schritt – zuverlässig und engagiert.",
            
            "map_tag": "Aachen, Deutschland",
            "map_title": "In Aachen gelegen. Für Sie da.",
            "map_desc": "Besuchen Sie uns persönlich oder kontaktieren Sie uns online – wir helfen Ihnen, die beste Lösung zu finden.",
            "map_btn": "Auf der Karte ansehen",
            "map_city": "AACHEN"
        }
    },
    "ar": {
        "contact": {
            "header_sub": "نحن هنا من أجلك",
            "header_t1": "دعنا نتواصل.",
            "header_t2": "نحن نهتم بذلك.",
            "header_desc": "هل لديك أسئلة أو تحتاج إلى نصيحة؟ فريقنا الودود مستعد لمساعدتك في أي شيء تحتاجه. تواصل معنا وسنرد عليك في أقرب وقت ممكن.",
            "f1_t": "اتصل في أي وقت",
            "f1_d": "نحن على بعد مكالمة واحدة فقط",
            "f2_t": "استجابة سريعة",
            "f2_d": "عادة خلال 24 ساعة",
            "f3_t": "دعم موثوق",
            "f3_d": "موثوق. ودود. محلي.",
            "btn_call": "اتصل بنا الآن",
            "btn_msg": "أرسل لنا رسالة",
            
            "info_title": "معلومات الاتصال",
            "lbl_phone": "هاتف",
            "lbl_email": "البريد الإلكتروني",
            "lbl_addr": "العنوان",
            "lbl_hours": "ساعات العمل",
            "val_hours": "الاثنين - السبت: 10:00 - 19:00",
            
            "why_title": "لماذا تختار عالم الطاقة؟",
            "why_f1_t": "مستقل وشفاف",
            "why_f1_d": "نقدم نصائح محايدة بشفافية 100%.",
            "why_f2_t": "حلول مخصصة",
            "why_f2_d": "نجد أفضل التعريفات والعقود التي تناسب احتياجاتك تماماً.",
            "why_f3_t": "دعم شخصي",
            "why_f3_d": "نحن معك في كل خطوة - موثوقون وملتزمون.",
            
            "map_tag": "آخن، ألمانيا",
            "map_title": "متواجدون في آخن. هنا من أجلك.",
            "map_desc": "تفضل بزيارتنا شخصيًا أو تواصل معنا عبر الإنترنت - سنساعدك في العثور على أفضل حل.",
            "map_btn": "عرض على الخريطة",
            "map_city": "آخن"
        }
    },
    "tr": {
        "contact": {
            "header_sub": "Sizin için buradayız",
            "header_t1": "İletişime geçelim.",
            "header_t2": "Biz hallederiz.",
            "header_desc": "Sorularınız mı var veya tavsiyeye mi ihtiyacınız var? Güler yüzlü ekibimiz ihtiyacınız olan her konuda size yardımcı olmaya hazır. Ulaşın, en kısa sürede size geri dönelim.",
            "f1_t": "İstediğiniz Zaman Arayın",
            "f1_d": "Bir telefon kadar yakınız",
            "f2_t": "Hızlı Yanıt",
            "f2_d": "Genellikle 24 saat içinde",
            "f3_t": "Güvenilir Destek",
            "f3_d": "Güvenilir. Dostça. Yerel.",
            "btn_call": "Şimdi Bizi Arayın",
            "btn_msg": "Bize Mesaj Gönderin",
            
            "info_title": "İletişim Bilgileri",
            "lbl_phone": "Telefon",
            "lbl_email": "E-Posta",
            "lbl_addr": "Adres",
            "lbl_hours": "Çalışma Saatleri",
            "val_hours": "Pzt – Cts: 10:00 – 19:00",
            
            "why_title": "Neden Energie Alemi?",
            "why_f1_t": "Bağımsız ve Şeffaf",
            "why_f1_d": "%100 şeffaflıkla tarafsız danışmanlık sağlıyoruz.",
            "why_f2_t": "Kişiye Özel Çözümler",
            "why_f2_d": "İhtiyaçlarınıza en uygun tarife ve sözleşmeleri buluyoruz.",
            "why_f3_t": "Kişisel Destek",
            "why_f3_d": "Her adımda yanınızdayız – güvenilir ve kararlı.",
            
            "map_tag": "Aachen, Almanya",
            "map_title": "Aachen'da bulunuyoruz. Sizin için buradayız.",
            "map_desc": "Bizi şahsen ziyaret edin veya çevrimiçi iletişime geçin - en iyi çözümü bulmanıza yardımcı olacağız.",
            "map_btn": "Haritada Görüntüle",
            "map_city": "AACHEN"
        }
    }
}

for lang in langs:
    filepath = os.path.join(locales_dir, lang, "translation.json")
    if os.path.exists(filepath):
        with open(filepath, "r") as f:
            current_data = json.load(f)
        
        current_data.update(data[lang])
        
        with open(filepath, "w") as f:
            json.dump(current_data, f, indent=2, ensure_ascii=False)
