import json
import os

locales_dir = "public/locales"
langs = ["en", "de", "ar", "tr"]

data = {
    "en": {
        "footer": {
            "smart_advice": "Smart advice.",
            "lower_costs": "Lower costs.",
            "contact": "Contact",
            "quick_links": "Quick Links",
            "follow_us": "Follow us",
            "data_protection": "Data protection",
            "rights_reserved": "Energie Alemi. All rights reserved."
        }
    },
    "de": {
        "footer": {
            "smart_advice": "Kluge Beratung.",
            "lower_costs": "Geringere Kosten.",
            "contact": "Kontakt",
            "quick_links": "Schnelle Links",
            "follow_us": "Folgen Sie uns",
            "data_protection": "Datenschutz",
            "rights_reserved": "Energie Alemi. Alle Rechte vorbehalten."
        }
    },
    "ar": {
        "footer": {
            "smart_advice": "نصيحة ذكية.",
            "lower_costs": "تكاليف أقل.",
            "contact": "اتصل بنا",
            "quick_links": "روابط سريعة",
            "follow_us": "تابعنا",
            "data_protection": "حماية البيانات",
            "rights_reserved": "عالم الطاقة. جميع الحقوق محفوظة."
        }
    },
    "tr": {
        "footer": {
            "smart_advice": "Akıllı danışmanlık.",
            "lower_costs": "Daha düşük maliyet.",
            "contact": "İletişim",
            "quick_links": "Hızlı Bağlantılar",
            "follow_us": "Bizi takip edin",
            "data_protection": "Veri koruması",
            "rights_reserved": "Energie Alemi. Tüm hakları saklıdır."
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
