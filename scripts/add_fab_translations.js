const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../public/locales');
const locales = ['de', 'en', 'ar', 'fa'];

const translations = {
  de: {
    fab: {
      email_tooltip: "E-MAIL SENDEN",
      whatsapp_tooltip: "WHATSAPP SCHREIBEN",
      call_tooltip: "JETZT ANRUFEN"
    }
  },
  en: {
    fab: {
      email_tooltip: "SEND EMAIL",
      whatsapp_tooltip: "WHATSAPP MESSAGE",
      call_tooltip: "CALL NOW"
    }
  },
  ar: {
    fab: {
      email_tooltip: "إرسال بريد إلكتروني",
      whatsapp_tooltip: "رسالة واتساب",
      call_tooltip: "اتصل الآن"
    }
  },
  fa: {
    fab: {
      email_tooltip: "ارسال ایمیل",
      whatsapp_tooltip: "پیام واتساپ",
      call_tooltip: "تماس بگیرید"
    }
  }
};

locales.forEach(lang => {
  const filePath = path.join(localesDir, lang, 'translation.json');
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    data.fab = translations[lang].fab;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
    console.log(`Updated ${lang}/translation.json`);
  }
});
