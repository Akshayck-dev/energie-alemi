import json
import os

locales_dir = "public/locales"
langs = ["en", "de", "ar", "tr"]

data = {
    "en": {
        "gas": {
            "hero_t1": "Smart energy decisions.",
            "hero_t2": "Lower costs.",
            "hero_desc": "We compare gas tariffs and help you reduce your energy costs – in person in Aachen or conveniently online.",
            "f1_t": "Compare gas tariffs",
            "f1_d": "We compare numerous gas tariffs from various providers and show you suitable options for your company.",
            "f2_t": "Advice on gas contracts",
            "f2_d": "We will explain contract durations, price guarantees and other important tariff details in a way that is easy to understand.",
            "f3_t": "Switching providers",
            "f3_d": "If you decide to switch to a new gas tariff, we will accompany you during the transition and support you in all steps.",
            "f4_t": "Sustainability",
            "f4_d": "Upon request, we can also inform you about alternative or sustainable energy solutions for your company.",
            "tl_sub": "HOW WE WORK",
            "tl_t1": "In 4 simple steps to the right",
            "tl_t_high": "gas tariff",
            "tl_desc": "We make the entire process transparent, simple and efficient so you can focus on what really matters: your business.",
            "tl_graphic": "Sustainable energy solutions",
            "s1_t": "Schedule a consultation appointment",
            "s1_d": "The first step to finding the right gas tariff is a personal consultation. You can visit us anytime at our shop in the center of Aachen or contact us online. In a non-obligation consultation, we'll take the time to answer your questions and inform you about your options.",
            "s2_t": "Compare gas tariffs",
            "s2_d": "Based on the information you provide, we compare a wide range of gas tariffs from various providers. We pay close attention to important factors such as price, contract duration, price guarantee, and other tariff conditions.",
            "s3_t": "Make decision",
            "s3_d": "After presenting you with various tariff options, you can take your time to decide which gas tariff best suits your business. We will explain all the important contract details and answer your questions so you can make an informed decision.",
            "s4_t": "Switch providers",
            "s4_d": "Once you've chosen a new gas tariff, we'll support you throughout the entire switching process. In most cases, the new supplier will handle the cancellation of your existing contract and organize the switch. This means no extra work for you, and your gas supply will, of course, remain uninterrupted at all times.",
            "faq_sub": "FAQ",
            "faq_t": "Frequently asked questions",
            "q1": "Is switching gas tariffs complicated for businesses?",
            "a1": "No. The new provider usually handles the organizational steps for the switch.",
            "q2": "Will there be an interruption in the gas supply?",
            "a2": "No. Your gas supply remains secure at all times.",
            "q3": "How long does it take to switch providers?",
            "a3": "The switch usually takes place within a few weeks and is implemented automatically by the new provider.",
            "btn": "Non-binding consultation"
        }
    },
    "de": {
        "gas": {
            "hero_t1": "Smarte Energieentscheidungen.",
            "hero_t2": "Niedrigere Kosten.",
            "hero_desc": "Wir vergleichen Gastarife und helfen Ihnen, Ihre Energiekosten zu senken – persönlich in Aachen oder bequem online.",
            "f1_t": "Gastarife vergleichen",
            "f1_d": "Wir vergleichen zahlreiche Gastarife verschiedener Anbieter und zeigen Ihnen passende Optionen für Ihr Unternehmen.",
            "f2_t": "Beratung zu Gasverträgen",
            "f2_d": "Wir erklären Ihnen Vertragslaufzeiten, Preisgarantien und weitere wichtige Tarifdetails leicht verständlich.",
            "f3_t": "Anbieterwechsel",
            "f3_d": "Wenn Sie sich für einen neuen Gastarif entscheiden, begleiten wir Sie beim Wechsel und unterstützen Sie bei allen Schritten.",
            "f4_t": "Nachhaltigkeit",
            "f4_d": "Auf Wunsch informieren wir Sie auch über alternative oder nachhaltige Energielösungen für Ihr Unternehmen.",
            "tl_sub": "WIE WIR ARBEITEN",
            "tl_t1": "In 4 einfachen Schritten zum richtigen",
            "tl_t_high": "Gastarif",
            "tl_desc": "Wir machen den gesamten Prozess transparent, einfach und effizient, damit Sie sich auf das konzentrieren können, was wirklich zählt: Ihr Geschäft.",
            "tl_graphic": "Nachhaltige Energielösungen",
            "s1_t": "Beratungstermin vereinbaren",
            "s1_d": "Der erste Schritt zum richtigen Gastarif ist eine persönliche Beratung. Sie können uns jederzeit in unserem Shop im Zentrum von Aachen besuchen oder uns online kontaktieren. In einer unverbindlichen Beratung nehmen wir uns Zeit für Ihre Fragen und informieren Sie über Ihre Möglichkeiten.",
            "s2_t": "Gastarife vergleichen",
            "s2_d": "Basierend auf Ihren Angaben vergleichen wir eine Vielzahl von Gastarifen verschiedener Anbieter. Dabei achten wir besonders auf wichtige Faktoren wie Preis, Vertragslaufzeit, Preisgarantie und weitere Tarifkonditionen.",
            "s3_t": "Entscheidung treffen",
            "s3_d": "Nachdem wir Ihnen verschiedene Tarifoptionen vorgestellt haben, können Sie in Ruhe entscheiden, welcher Gastarif am besten zu Ihrem Unternehmen passt. Wir erklären alle wichtigen Vertragsdetails und beantworten Ihre Fragen, damit Sie eine fundierte Entscheidung treffen können.",
            "s4_t": "Anbieter wechseln",
            "s4_d": "Sobald Sie sich für einen neuen Gastarif entschieden haben, unterstützen wir Sie beim gesamten Wechselprozess. In den meisten Fällen übernimmt der neue Versorger die Kündigung Ihres bestehenden Vertrages und organisiert den Wechsel. Das bedeutet für Sie keinen Mehraufwand, und Ihre Gasversorgung bleibt natürlich jederzeit unterbrechungsfrei.",
            "faq_sub": "FAQ",
            "faq_t": "Häufig gestellte Fragen",
            "q1": "Ist ein Wechsel des Gastarifs für Unternehmen kompliziert?",
            "a1": "Nein. Der neue Anbieter übernimmt in der Regel die organisatorischen Schritte für den Wechsel.",
            "q2": "Kommt es zu einer Unterbrechung der Gasversorgung?",
            "a2": "Nein. Ihre Gasversorgung bleibt jederzeit gesichert.",
            "q3": "Wie lange dauert ein Anbieterwechsel?",
            "a3": "Der Wechsel erfolgt in der Regel innerhalb weniger Wochen und wird vom neuen Anbieter automatisch umgesetzt.",
            "btn": "Unverbindliche Beratung"
        }
    },
    "ar": {
        "gas": {
            "hero_t1": "قرارات طاقة ذكية.",
            "hero_t2": "تكاليف أقل.",
            "hero_desc": "نقوم بمقارنة تعريفات الغاز ونساعدك على تقليل تكاليف الطاقة الخاصة بك - شخصيًا في آخن أو بشكل مريح عبر الإنترنت.",
            "f1_t": "مقارنة تعريفات الغاز",
            "f1_d": "نقوم بمقارنة العديد من تعريفات الغاز من مختلف المزودين ونعرض لك الخيارات المناسبة لشركتك.",
            "f2_t": "نصائح حول عقود الغاز",
            "f2_d": "سنشرح لك فترات العقد، وضمانات الأسعار، وتفاصيل التعريفة الهامة الأخرى بطريقة سهلة الفهم.",
            "f3_t": "تبديل المزودين",
            "f3_d": "إذا قررت التبديل إلى تعريفة غاز جديدة، سنرافقك خلال فترة الانتقال وندعمك في جميع الخطوات.",
            "f4_t": "الاستدامة",
            "f4_d": "عند الطلب، يمكننا أيضاً إعلامك بالحلول البديلة أو المستدامة للطاقة لشركتك.",
            "tl_sub": "كيف نعمل",
            "tl_t1": "في 4 خطوات بسيطة نحو",
            "tl_t_high": "تعريفة الغاز الصحيحة",
            "tl_desc": "نجعل العملية بأكملها شفافة وبسيطة وفعالة حتى تتمكن من التركيز على ما يهم حقًا: عملك.",
            "tl_graphic": "حلول طاقة مستدامة",
            "s1_t": "حدد موعداً للاستشارة",
            "s1_d": "الخطوة الأولى للعثور على تعريفة الغاز الصحيحة هي الاستشارة الشخصية. يمكنك زيارتنا في أي وقت في متجرنا في وسط آخن أو الاتصال بنا عبر الإنترنت. في استشارة غير ملزمة، سنأخذ الوقت الكافي للإجابة على أسئلتك وإبلاغك بخياراتك.",
            "s2_t": "مقارنة تعريفات الغاز",
            "s2_d": "بناءً على المعلومات التي تقدمها، نقوم بمقارنة مجموعة واسعة من تعريفات الغاز من مختلف المزودين. نولي اهتمامًا وثيقًا للعوامل الهامة مثل السعر، ومدة العقد، وضمان السعر، وشروط التعريفة الأخرى.",
            "s3_t": "اتخاذ قرار",
            "s3_d": "بعد تقديم خيارات التعريفة المختلفة لك، يمكنك أن تأخذ وقتك لتقرر أي تعريفة غاز تناسب عملك بشكل أفضل. سنشرح جميع تفاصيل العقد الهامة ونجيب على أسئلتك حتى تتمكن من اتخاذ قرار مدروس.",
            "s4_t": "تبديل المزودين",
            "s4_d": "بمجرد اختيارك تعريفة غاز جديدة، سندعمك طوال عملية التبديل بأكملها. في معظم الحالات، سيتولى المورد الجديد إلغاء عقدك الحالي وتنظيم التبديل. هذا يعني عدم وجود عمل إضافي بالنسبة لك، وستظل إمدادات الغاز الخاصة بك بالطبع دون انقطاع في جميع الأوقات.",
            "faq_sub": "الأسئلة الشائعة",
            "faq_t": "الأسئلة المتداولة",
            "q1": "هل تبديل تعريفات الغاز معقد للشركات؟",
            "a1": "لا. يتولى المزود الجديد عادةً الخطوات التنظيمية للتبديل.",
            "q2": "هل سيكون هناك انقطاع في إمدادات الغاز؟",
            "a2": "لا. يظل إمداد الغاز الخاص بك آمنًا في جميع الأوقات.",
            "q3": "كم من الوقت يستغرق تبديل المزودين؟",
            "a3": "يحدث التبديل عادةً في غضون بضعة أسابيع ويتم تنفيذه تلقائيًا بواسطة المزود الجديد.",
            "btn": "استشارة غير ملزمة"
        }
    },
    "tr": {
        "gas": {
            "hero_t1": "Akıllı enerji kararları.",
            "hero_t2": "Daha düşük maliyetler.",
            "hero_desc": "Gaz tarifelerini karşılaştırıyor ve enerji maliyetlerinizi düşürmenize yardımcı oluyoruz - şahsen Aachen'da veya çevrimiçi olarak.",
            "f1_t": "Gaz tarifelerini karşılaştırın",
            "f1_d": "Çeşitli sağlayıcılardan sayısız gaz tarifesini karşılaştırıyor ve şirketiniz için uygun seçenekleri gösteriyoruz.",
            "f2_t": "Gaz sözleşmeleri hakkında danışmanlık",
            "f2_d": "Sözleşme sürelerini, fiyat garantilerini ve diğer önemli tarife detaylarını anlaşılması kolay bir şekilde açıklayacağız.",
            "f3_t": "Sağlayıcı değiştirme",
            "f3_d": "Yeni bir gaz tarifesine geçmeye karar verirseniz, geçiş sırasında size eşlik edecek ve tüm adımlarda destek olacağız.",
            "f4_t": "Sürdürülebilirlik",
            "f4_d": "Talep üzerine, şirketiniz için alternatif veya sürdürülebilir enerji çözümleri hakkında da sizi bilgilendirebiliriz.",
            "tl_sub": "NASIL ÇALIŞIYORUZ",
            "tl_t1": "Doğru",
            "tl_t_high": "gaz tarifesine 4 basit adımda",
            "tl_desc": "Tüm süreci şeffaf, basit ve verimli hale getiriyoruz, böylece gerçekten önemli olana, yani işinize odaklanabilirsiniz.",
            "tl_graphic": "Sürdürülebilir enerji çözümleri",
            "s1_t": "Bir danışmanlık randevusu planlayın",
            "s1_d": "Doğru gaz tarifesini bulmanın ilk adımı kişisel bir danışmanlıktır. Bizi Aachen'in merkezindeki mağazamızda istediğiniz zaman ziyaret edebilir veya çevrimiçi olarak iletişime geçebilirsiniz. Bağlayıcı olmayan bir danışmanlıkta, sorularınızı yanıtlamak ve seçenekleriniz hakkında sizi bilgilendirmek için zaman ayıracağız.",
            "s2_t": "Gaz tarifelerini karşılaştırın",
            "s2_d": "Sağladığınız bilgilere dayanarak, çeşitli sağlayıcılardan çok çeşitli gaz tarifelerini karşılaştırıyoruz. Fiyat, sözleşme süresi, fiyat garantisi ve diğer tarife koşulları gibi önemli faktörlere çok dikkat ediyoruz.",
            "s3_t": "Karar verin",
            "s3_d": "Size çeşitli tarife seçenekleri sunduktan sonra, hangi gaz tarifesinin işletmenize en uygun olduğuna karar vermek için zaman ayırabilirsiniz. Bilinçli bir karar verebilmeniz için tüm önemli sözleşme ayrıntılarını açıklayacak ve sorularınızı yanıtlayacağız.",
            "s4_t": "Sağlayıcı değiştirin",
            "s4_d": "Yeni bir gaz tarifesi seçtiğinizde, tüm geçiş sürecinde sizi destekleyeceğiz. Çoğu durumda, yeni tedarikçi mevcut sözleşmenizin iptalini halledecek ve geçişi organize edecektir. Bu sizin için ekstra bir iş anlamına gelmez ve gaz tedarikiniz elbette her zaman kesintisiz kalacaktır.",
            "faq_sub": "SSS",
            "faq_t": "Sıkça sorulan sorular",
            "q1": "İşletmeler için gaz tarifesi değiştirmek karmaşık mıdır?",
            "a1": "Hayır. Yeni sağlayıcı genellikle geçiş için organizasyonel adımları halleder.",
            "q2": "Gaz arzında kesinti olacak mı?",
            "a2": "Hayır. Gaz tedarikiniz her zaman güvende kalır.",
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
