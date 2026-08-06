import json
import os

locales_dir = "public/locales"
langs = ["en", "de", "ar", "tr"]

data = {
    "en": {
        "elec": {
            "hero_t1": "Smart energy decisions.",
            "hero_t2": "Lower costs.",
            "hero_desc": "We compare electricity tariffs and help you reduce your energy costs – in person in Aachen or conveniently online.",
            "f1_t": "Compare electricity tariffs",
            "f1_d": "We compare numerous electricity tariffs from various providers and show you suitable options for your company.",
            "f2_t": "Advice on electricity contracts",
            "f2_d": "We will explain contract durations, price guarantees and other important tariff details in a way that is easy to understand.",
            "f3_t": "Switching providers",
            "f3_d": "If you decide to switch to a new electricity tariff, we will accompany you during the transition and support you in all steps.",
            "f4_t": "Green Electricity",
            "f4_d": "Upon request, we can inform you about certified green electricity solutions for a sustainable energy footprint.",
            "tl_sub": "HOW WE WORK",
            "tl_t1": "In 4 simple steps to the right",
            "tl_t_high": "electricity tariff",
            "tl_desc": "We make the entire process transparent, simple and efficient so you can focus on what really matters: your business.",
            "s1_t": "Schedule a consultation appointment",
            "s1_d": "The first step to finding the right electricity tariff is a personal consultation. You can visit us anytime at our shop in the center of Aachen or contact us online.",
            "s2_t": "Compare electricity tariffs",
            "s2_d": "Based on the information you provide, we compare a wide range of electricity tariffs from various providers. We pay close attention to important factors such as price and contract duration.",
            "s3_t": "Make decision",
            "s3_d": "After presenting you with various tariff options, you can take your time to decide which electricity tariff best suits your business.",
            "s4_t": "Switch providers",
            "s4_d": "Once you've chosen a new electricity tariff, we'll support you throughout the entire switching process without any interruption to your power supply.",
            "faq_sub": "FAQ",
            "faq_t": "Frequently asked questions",
            "q1": "Is switching electricity tariffs complicated for businesses?",
            "a1": "No. The new provider usually handles the organizational steps for the switch.",
            "q2": "Will there be an interruption in the electricity supply?",
            "a2": "No. Your power supply remains secure at all times. There is no risk of blackout.",
            "q3": "How long does it take to switch providers?",
            "a3": "The switch usually takes place within a few weeks and is implemented automatically by the new provider.",
            "btn": "Non-binding consultation"
        }
    },
    "de": {
        "elec": {
            "hero_t1": "Smarte Energieentscheidungen.",
            "hero_t2": "Niedrigere Kosten.",
            "hero_desc": "Wir vergleichen Stromtarife und helfen Ihnen, Ihre Energiekosten zu senken – persönlich in Aachen oder bequem online.",
            "f1_t": "Stromtarife vergleichen",
            "f1_d": "Wir vergleichen zahlreiche Stromtarife verschiedener Anbieter und zeigen Ihnen passende Optionen für Ihr Unternehmen.",
            "f2_t": "Beratung zu Stromverträgen",
            "f2_d": "Wir erklären Ihnen Vertragslaufzeiten, Preisgarantien und weitere wichtige Tarifdetails leicht verständlich.",
            "f3_t": "Anbieterwechsel",
            "f3_d": "Wenn Sie sich für einen neuen Stromtarif entscheiden, begleiten wir Sie beim Wechsel und unterstützen Sie bei allen Schritten.",
            "f4_t": "Ökostrom",
            "f4_d": "Auf Wunsch informieren wir Sie über zertifizierte Ökostromlösungen für eine nachhaltige Energiebilanz.",
            "tl_sub": "WIE WIR ARBEITEN",
            "tl_t1": "In 4 einfachen Schritten zum richtigen",
            "tl_t_high": "Stromtarif",
            "tl_desc": "Wir machen den gesamten Prozess transparent, einfach und effizient, damit Sie sich auf das konzentrieren können, was wirklich zählt: Ihr Geschäft.",
            "s1_t": "Beratungstermin vereinbaren",
            "s1_d": "Der erste Schritt zum richtigen Stromtarif ist eine persönliche Beratung. Sie können uns jederzeit in unserem Shop im Zentrum von Aachen besuchen oder uns online kontaktieren.",
            "s2_t": "Stromtarife vergleichen",
            "s2_d": "Basierend auf Ihren Angaben vergleichen wir eine Vielzahl von Stromtarifen verschiedener Anbieter. Wir achten besonders auf wichtige Faktoren wie Preis und Vertragslaufzeit.",
            "s3_t": "Entscheidung treffen",
            "s3_d": "Nachdem wir Ihnen verschiedene Tarifoptionen vorgestellt haben, können Sie in Ruhe entscheiden, welcher Stromtarif am besten zu Ihrem Unternehmen passt.",
            "s4_t": "Anbieter wechseln",
            "s4_d": "Sobald Sie sich für einen neuen Stromtarif entschieden haben, unterstützen wir Sie beim gesamten Wechselprozess ohne Unterbrechung Ihrer Stromversorgung.",
            "faq_sub": "FAQ",
            "faq_t": "Häufig gestellte Fragen",
            "q1": "Ist ein Wechsel des Stromtarifs für Unternehmen kompliziert?",
            "a1": "Nein. Der neue Anbieter übernimmt in der Regel die organisatorischen Schritte für den Wechsel.",
            "q2": "Kommt es zu einer Unterbrechung der Stromversorgung?",
            "a2": "Nein. Ihre Stromversorgung bleibt jederzeit gesichert. Es besteht keine Gefahr eines Stromausfalls.",
            "q3": "Wie lange dauert ein Anbieterwechsel?",
            "a3": "Der Wechsel erfolgt in der Regel innerhalb weniger Wochen und wird vom neuen Anbieter automatisch umgesetzt.",
            "btn": "Unverbindliche Beratung"
        }
    },
    "ar": {
        "elec": {
            "hero_t1": "قرارات طاقة ذكية.",
            "hero_t2": "تكاليف أقل.",
            "hero_desc": "نقوم بمقارنة تعريفات الكهرباء ونساعدك على تقليل تكاليف الطاقة الخاصة بك - شخصيًا في آخن أو بشكل مريح عبر الإنترنت.",
            "f1_t": "مقارنة تعريفات الكهرباء",
            "f1_d": "نقوم بمقارنة العديد من تعريفات الكهرباء من مختلف المزودين ونعرض لك الخيارات المناسبة لشركتك.",
            "f2_t": "نصائح حول عقود الكهرباء",
            "f2_d": "سنشرح لك فترات العقد، وضمانات الأسعار، وتفاصيل التعريفة الهامة الأخرى بطريقة سهلة الفهم.",
            "f3_t": "تبديل المزودين",
            "f3_d": "إذا قررت التبديل إلى تعريفة كهرباء جديدة، سنرافقك خلال فترة الانتقال وندعمك في جميع الخطوات.",
            "f4_t": "الكهرباء الخضراء",
            "f4_d": "عند الطلب، يمكننا إعلامك بحلول الكهرباء الخضراء المعتمدة لبصمة طاقة مستدامة.",
            "tl_sub": "كيف نعمل",
            "tl_t1": "في 4 خطوات بسيطة نحو",
            "tl_t_high": "تعريفة الكهرباء الصحيحة",
            "tl_desc": "نجعل العملية بأكملها شفافة وبسيطة وفعالة حتى تتمكن من التركيز على ما يهم حقًا: عملك.",
            "s1_t": "حدد موعداً للاستشارة",
            "s1_d": "الخطوة الأولى للعثور على تعريفة الكهرباء الصحيحة هي الاستشارة الشخصية. يمكنك زيارتنا في أي وقت في متجرنا في وسط آخن أو الاتصال بنا عبر الإنترنت.",
            "s2_t": "مقارنة تعريفات الكهرباء",
            "s2_d": "بناءً على المعلومات التي تقدمها، نقوم بمقارنة مجموعة واسعة من تعريفات الكهرباء من مختلف المزودين. نولي اهتمامًا وثيقًا للعوامل الهامة مثل السعر ومدة العقد.",
            "s3_t": "اتخاذ قرار",
            "s3_d": "بعد تقديم خيارات التعريفة المختلفة لك، يمكنك أن تأخذ وقتك لتقرر أي تعريفة كهرباء تناسب عملك بشكل أفضل.",
            "s4_t": "تبديل المزودين",
            "s4_d": "بمجرد اختيارك تعريفة كهرباء جديدة، سندعمك طوال عملية التبديل بأكملها دون أي انقطاع في إمدادات الطاقة الخاصة بك.",
            "faq_sub": "الأسئلة الشائعة",
            "faq_t": "الأسئلة المتداولة",
            "q1": "هل تبديل تعريفات الكهرباء معقد للشركات؟",
            "a1": "لا. يتولى المزود الجديد عادةً الخطوات التنظيمية للتبديل.",
            "q2": "هل سيكون هناك انقطاع في إمدادات الكهرباء؟",
            "a2": "لا. يظل إمداد الطاقة الخاص بك آمنًا في جميع الأوقات. لا يوجد خطر من انقطاع التيار الكهربائي.",
            "q3": "كم من الوقت يستغرق تبديل المزودين؟",
            "a3": "يحدث التبديل عادةً في غضون بضعة أسابيع ويتم تنفيذه تلقائيًا بواسطة المزود الجديد.",
            "btn": "استشارة غير ملزمة"
        }
    },
    "tr": {
        "elec": {
            "hero_t1": "Akıllı enerji kararları.",
            "hero_t2": "Daha düşük maliyetler.",
            "hero_desc": "Elektrik tarifelerini karşılaştırıyor ve enerji maliyetlerinizi düşürmenize yardımcı oluyoruz - şahsen Aachen'da veya çevrimiçi olarak.",
            "f1_t": "Elektrik tarifelerini karşılaştırın",
            "f1_d": "Çeşitli sağlayıcılardan sayısız elektrik tarifesini karşılaştırıyor ve şirketiniz için uygun seçenekleri gösteriyoruz.",
            "f2_t": "Elektrik sözleşmeleri hakkında danışmanlık",
            "f2_d": "Sözleşme sürelerini, fiyat garantilerini ve diğer önemli tarife detaylarını anlaşılması kolay bir şekilde açıklayacağız.",
            "f3_t": "Sağlayıcı değiştirme",
            "f3_d": "Yeni bir elektrik tarifesine geçmeye karar verirseniz, geçiş sırasında size eşlik edecek ve tüm adımlarda destek olacağız.",
            "f4_t": "Yeşil Elektrik",
            "f4_d": "Talep üzerine, sürdürülebilir bir enerji ayak izi için sertifikalı yeşil elektrik çözümleri hakkında sizi bilgilendirebiliriz.",
            "tl_sub": "NASIL ÇALIŞIYORUZ",
            "tl_t1": "Doğru",
            "tl_t_high": "elektrik tarifesine 4 basit adımda",
            "tl_desc": "Tüm süreci şeffaf, basit ve verimli hale getiriyoruz, böylece gerçekten önemli olana, yani işinize odaklanabilirsiniz.",
            "s1_t": "Bir danışmanlık randevusu planlayın",
            "s1_d": "Doğru elektrik tarifesini bulmanın ilk adımı kişisel bir danışmanlıktır. Bizi Aachen'in merkezindeki mağazamızda istediğiniz zaman ziyaret edebilir veya çevrimiçi olarak iletişime geçebilirsiniz.",
            "s2_t": "Elektrik tarifelerini karşılaştırın",
            "s2_d": "Sağladığınız bilgilere dayanarak, çeşitli sağlayıcılardan çok çeşitli elektrik tarifelerini karşılaştırıyoruz. Fiyat ve sözleşme süresi gibi önemli faktörlere çok dikkat ediyoruz.",
            "s3_t": "Karar verin",
            "s3_d": "Size çeşitli tarife seçenekleri sunduktan sonra, hangi elektrik tarifesinin işletmenize en uygun olduğuna karar vermek için zaman ayırabilirsiniz.",
            "s4_t": "Sağlayıcı değiştirin",
            "s4_d": "Yeni bir elektrik tarifesi seçtiğinizde, güç kaynağınızda herhangi bir kesinti olmadan tüm geçiş sürecinde sizi destekleyeceğiz.",
            "faq_sub": "SSS",
            "faq_t": "Sıkça sorulan sorular",
            "q1": "İşletmeler için elektrik tarifesi değiştirmek karmaşık mıdır?",
            "a1": "Hayır. Yeni sağlayıcı genellikle geçiş için organizasyonel adımları halleder.",
            "q2": "Elektrik arzında kesinti olacak mı?",
            "a2": "Hayır. Güç kaynağınız her zaman güvende kalır. Elektrik kesintisi riski yoktur.",
            "q3": "Sağlayıcı değiştirmek ne kadar sürer?",
            "a3": "Geçiş genellikle birkaç hafta içinde gerçekleşir ve yeni sağlayıcı tarafından otomatik olarak uygulanır.",
            "btn": "Bağlayıcı olmayan danışmanlık"
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
