import json
import os

locales_dir = "public/locales"
langs = ["en", "de", "ar", "tr"]

data = {
    "en": {
        "about": {
            "hero_subtitle": "ABOUT US",
            "hero_title": "Energie Alemi",
            "hero_desc": "Professional advice on electricity, gas and internet",
            "hero_button": "Non-binding consultation",
            "hero_f1_title": "Expert Advice",
            "hero_f1_desc": "Clear and reliable energy guidance",
            "hero_f2_title": "Transparent",
            "hero_f2_desc": "Honest comparisons and clear solutions",
            "hero_f3_title": "Customer First",
            "hero_f3_desc": "Your needs are our priority",
            
            "phil_subtitle": "OUR PHILOSOPHY",
            "phil_title1": "Not tied to providers.",
            "phil_title2": "Committed to your success.",
            "phil_p1": "As an independent consultancy firm, we are not tied to specific providers. This independence is the core of our business model and allows us to act entirely in your interest.",
            "phil_p2": "Our goal is to make the complex energy and telecommunications market transparent for you. We analyze your current contracts, uncover savings potential, and develop customized solutions that perfectly match your consumption patterns.",
            "phil_p3": "Through our extensive network and continuous market monitoring, we secure conditions that are often not publicly available.",
            "phil_stat1_num": "100+",
            "phil_stat1_text": "Providers Compared",
            "phil_stat2_num": "Independent",
            "phil_stat2_text": "Consulting",
            "phil_stat3_num": "100%",
            "phil_stat3_text": "Client Focus",
            
            "exp_title1": "More than",
            "exp_title_high": "7+ years",
            "exp_title2": "of experience in energy & telecommunications",
            "exp_p1": "For over seven years, we have been helping companies and individuals find the best solutions for electricity, gas, and internet.",
            "exp_p2": "Under the leadership of Shoaib Alemi, our team provides personal, transparent, and reliable advice on a wide range of tariff options. We help businesses and private customers make informed decisions that truly fit their needs.",
            "exp_p3": "With deep experience in energy and telecommunications contracts, we explain complex options in a simple and clear way – so you can save costs, reduce risks, and plan with confidence.",
            "exp_p4": "Many companies prefer personal consultation over online comparisons. That's why we welcome you at our store in the heart of Aachen or online – whatever is most convenient for you.",
            "exp_quote": "Our goal is simple: reliable service, maximum planning security, and the best solution for you.",
            "exp_f1_title": "Independency",
            "exp_f1_desc": "We work independently and recommend what's best for you.",
            "exp_f2_title": "Transparency",
            "exp_f2_desc": "We compare tariffs clearly so you can make informed decisions.",
            "exp_f3_title": "Personal Consultation",
            "exp_f3_desc": "We take the time to understand your requirements and goals.",
            "exp_f4_title": "Reliable Support",
            "exp_f4_desc": "We're here for you – before, during, and after your decision.",
            
            "cta_title": "Questions or need support?",
            "cta_desc": "We're happy to help you with customized solutions for your electricity, gas, and internet contracts.",
            "cta_button": "Non-binding consultation"
        }
    },
    "de": {
        "about": {
            "hero_subtitle": "ÜBER UNS",
            "hero_title": "Energie Alemi",
            "hero_desc": "Professionelle Beratung zu Strom, Gas und Internet",
            "hero_button": "Unverbindliche Beratung",
            "hero_f1_title": "Expertenberatung",
            "hero_f1_desc": "Klare und zuverlässige Energieberatung",
            "hero_f2_title": "Transparent",
            "hero_f2_desc": "Ehrliche Vergleiche und klare Lösungen",
            "hero_f3_title": "Kunde Zuerst",
            "hero_f3_desc": "Ihre Bedürfnisse sind unsere Priorität",
            
            "phil_subtitle": "UNSERE PHILOSOPHIE",
            "phil_title1": "Nicht an Anbieter gebunden.",
            "phil_title2": "Ihrem Erfolg verpflichtet.",
            "phil_p1": "Als unabhängiges Beratungsunternehmen sind wir nicht an bestimmte Anbieter gebunden. Diese Unabhängigkeit ist der Kern unseres Geschäftsmodells und ermöglicht es uns, ganz in Ihrem Sinne zu handeln.",
            "phil_p2": "Unser Ziel ist es, den komplexen Energie- und Telekommunikationsmarkt für Sie transparent zu machen. Wir analysieren Ihre aktuellen Verträge, decken Einsparpotenziale auf und entwickeln maßgeschneiderte Lösungen, die perfekt zu Ihrem Verbrauchsverhalten passen.",
            "phil_p3": "Durch unser umfangreiches Netzwerk und kontinuierliche Marktbeobachtung sichern wir uns Konditionen, die oft nicht öffentlich zugänglich sind.",
            "phil_stat1_num": "100+",
            "phil_stat1_text": "Verglichene Anbieter",
            "phil_stat2_num": "Unabhängige",
            "phil_stat2_text": "Beratung",
            "phil_stat3_num": "100%",
            "phil_stat3_text": "Kundenfokus",
            
            "exp_title1": "Mehr als",
            "exp_title_high": "7+ Jahre",
            "exp_title2": "Erfahrung in Energie & Telekommunikation",
            "exp_p1": "Seit über sieben Jahren helfen wir Unternehmen und Privatpersonen, die besten Lösungen für Strom, Gas und Internet zu finden.",
            "exp_p2": "Unter der Leitung von Shoaib Alemi bietet unser Team persönliche, transparente und zuverlässige Beratung zu einer Vielzahl von Tarifoptionen. Wir helfen Unternehmen und Privatkunden, fundierte Entscheidungen zu treffen, die wirklich ihren Bedürfnissen entsprechen.",
            "exp_p3": "Mit umfassender Erfahrung bei Energie- und Telekommunikationsverträgen erklären wir komplexe Optionen einfach und verständlich – damit Sie Kosten sparen, Risiken reduzieren und sicher planen können.",
            "exp_p4": "Viele Unternehmen bevorzugen eine persönliche Beratung gegenüber Online-Vergleichen. Deshalb begrüßen wir Sie gerne in unserem Geschäft im Herzen von Aachen oder online – ganz wie es für Sie am bequemsten ist.",
            "exp_quote": "Unser Ziel ist einfach: zuverlässiger Service, maximale Planungssicherheit und die beste Lösung für Sie.",
            "exp_f1_title": "Unabhängigkeit",
            "exp_f1_desc": "Wir arbeiten unabhängig und empfehlen, was das Beste für Sie ist.",
            "exp_f2_title": "Transparenz",
            "exp_f2_desc": "Wir vergleichen Tarife übersichtlich, damit Sie informierte Entscheidungen treffen können.",
            "exp_f3_title": "Persönliche Beratung",
            "exp_f3_desc": "Wir nehmen uns Zeit, Ihre Anforderungen und Ziele zu verstehen.",
            "exp_f4_title": "Zuverlässiger Support",
            "exp_f4_desc": "Wir sind für Sie da – vor, während und nach Ihrer Entscheidung.",
            
            "cta_title": "Fragen oder benötigen Sie Unterstützung?",
            "cta_desc": "Wir helfen Ihnen gerne mit maßgeschneiderten Lösungen für Ihre Strom-, Gas- und Internetverträge.",
            "cta_button": "Unverbindliche Beratung"
        }
    },
    "ar": {
        "about": {
            "hero_subtitle": "معلومات عنا",
            "hero_title": "عالم الطاقة",
            "hero_desc": "مشورة مهنية في مجالات الكهرباء والغاز والإنترنت",
            "hero_button": "استشارة غير ملزمة",
            "hero_f1_title": "استشارة خبراء",
            "hero_f1_desc": "إرشادات واضحة وموثوقة للطاقة",
            "hero_f2_title": "شفافية",
            "hero_f2_desc": "مقارنات صادقة وحلول واضحة",
            "hero_f3_title": "العميل أولاً",
            "hero_f3_desc": "احتياجاتك هي أولويتنا",
            
            "phil_subtitle": "فلسفتنا",
            "phil_title1": "غير مقيدين بمقدمي خدمات.",
            "phil_title2": "ملتزمون بنجاحك.",
            "phil_p1": "كشركة استشارية مستقلة، نحن لسنا مقيدين بمقدمي خدمات معينين. هذا الاستقلال هو جوهر نموذج عملنا ويسمح لنا بالعمل بالكامل لصالحك.",
            "phil_p2": "هدفنا هو جعل سوق الطاقة والاتصالات المعقد شفافاً لك. نقوم بتحليل عقودك الحالية، واكتشاف إمكانيات التوفير، وتطوير حلول مخصصة تتناسب تماماً مع أنماط استهلاكك.",
            "phil_p3": "من خلال شبكتنا الواسعة ومراقبة السوق المستمرة، نؤمن شروطاً غير متاحة للجمهور غالباً.",
            "phil_stat1_num": "+100",
            "phil_stat1_text": "مقدمي الخدمات المقارن بينهم",
            "phil_stat2_num": "استشارة",
            "phil_stat2_text": "مستقلة",
            "phil_stat3_num": "100%",
            "phil_stat3_text": "تركيز على العميل",
            
            "exp_title1": "أكثر من",
            "exp_title_high": "+7 سنوات",
            "exp_title2": "من الخبرة في مجالات الطاقة والاتصالات",
            "exp_p1": "لأكثر من سبع سنوات، كنا نساعد الشركات والأفراد في العثور على أفضل الحلول للكهرباء والغاز والإنترنت.",
            "exp_p2": "تحت قيادة شعيب عالمي، يقدم فريقنا نصائح شخصية وشفافة وموثوقة حول مجموعة واسعة من خيارات التعرفة. نساعد الشركات والعملاء الخاصين على اتخاذ قرارات مدروسة تناسب احتياجاتهم حقاً.",
            "exp_p3": "مع خبرة عميقة في عقود الطاقة والاتصالات، نوضح الخيارات المعقدة بطريقة بسيطة وواضحة - حتى تتمكن من توفير التكاليف، وتقليل المخاطر، والتخطيط بثقة.",
            "exp_p4": "تفضل العديد من الشركات الاستشارة الشخصية على المقارنات عبر الإنترنت. لذلك نرحب بكم في متجرنا في قلب آخن أو عبر الإنترنت - أيهما كان أكثر ملاءمة لكم.",
            "exp_quote": "هدفنا بسيط: خدمة موثوقة، وأقصى قدر من الأمان التخطيطي، وأفضل حل لك.",
            "exp_f1_title": "استقلالية",
            "exp_f1_desc": "نعمل بشكل مستقل ونوصي بما هو الأفضل لك.",
            "exp_f2_title": "شفافية",
            "exp_f2_desc": "نقوم بمقارنة التعريفات بوضوح حتى تتمكن من اتخاذ قرارات مدروسة.",
            "exp_f3_title": "استشارة شخصية",
            "exp_f3_desc": "نأخذ الوقت الكافي لفهم متطلباتك وأهدافك.",
            "exp_f4_title": "دعم موثوق",
            "exp_f4_desc": "نحن هنا من أجلك - قبل، وخلال، وبعد اتخاذ قرارك.",
            
            "cta_title": "أسئلة أو تحتاج إلى دعم؟",
            "cta_desc": "يسعدنا مساعدتك في حلول مخصصة لعقود الكهرباء والغاز والإنترنت الخاصة بك.",
            "cta_button": "استشارة غير ملزمة"
        }
    },
    "tr": {
        "about": {
            "hero_subtitle": "HAKKIMIZDA",
            "hero_title": "Energie Alemi",
            "hero_desc": "Elektrik, gaz ve internet konusunda profesyonel danışmanlık",
            "hero_button": "Bağlayıcı olmayan danışmanlık",
            "hero_f1_title": "Uzman Danışmanlığı",
            "hero_f1_desc": "Açık ve güvenilir enerji rehberliği",
            "hero_f2_title": "Şeffaf",
            "hero_f2_desc": "Dürüst karşılaştırmalar ve net çözümler",
            "hero_f3_title": "Önce Müşteri",
            "hero_f3_desc": "İhtiyaçlarınız önceliğimizdir",
            
            "phil_subtitle": "FELSEFEMİZ",
            "phil_title1": "Sağlayıcılara bağlı değil.",
            "phil_title2": "Başarınıza bağlıyız.",
            "phil_p1": "Bağımsız bir danışmanlık firması olarak, belirli sağlayıcılara bağlı değiliz. Bu bağımsızlık, iş modelimizin çekirdeğidir ve tamamen sizin çıkarınıza hareket etmemize olanak tanır.",
            "phil_p2": "Amacımız, karmaşık enerji ve telekomünikasyon pazarını sizin için şeffaf hale getirmektir. Mevcut sözleşmelerinizi analiz ediyor, tasarruf potansiyellerini ortaya çıkarıyor ve tüketim alışkanlıklarınıza mükemmel uyum sağlayan özel çözümler geliştiriyoruz.",
            "phil_p3": "Geniş ağımız ve sürekli pazar izlememiz sayesinde, genellikle halka açık olmayan koşulları güvence altına alıyoruz.",
            "phil_stat1_num": "100+",
            "phil_stat1_text": "Karşılaştırılan Sağlayıcılar",
            "phil_stat2_num": "Bağımsız",
            "phil_stat2_text": "Danışmanlık",
            "phil_stat3_num": "%100",
            "phil_stat3_text": "Müşteri Odaklı",
            
            "exp_title1": "Enerji ve telekomünikasyonda",
            "exp_title_high": "7+ yıldan",
            "exp_title2": "fazla deneyim",
            "exp_p1": "Yedi yılı aşkın süredir, şirketlerin ve bireylerin elektrik, gaz ve internet için en iyi çözümleri bulmalarına yardımcı oluyoruz.",
            "exp_p2": "Shoaib Alemi liderliğindeki ekibimiz, çok çeşitli tarife seçenekleri hakkında kişisel, şeffaf ve güvenilir danışmanlık sağlar. İşletmelerin ve özel müşterilerin gerçekten ihtiyaçlarına uyan bilinçli kararlar almalarına yardımcı oluyoruz.",
            "exp_p3": "Enerji ve telekomünikasyon sözleşmelerindeki derin deneyimimizle, karmaşık seçenekleri basit ve açık bir şekilde açıklıyoruz - böylece maliyetlerden tasarruf edebilir, riskleri azaltabilir ve güvenle plan yapabilirsiniz.",
            "exp_p4": "Birçok şirket, çevrimiçi karşılaştırmalar yerine kişisel danışmanlığı tercih ediyor. Bu nedenle sizi Aachen'in kalbindeki mağazamızda veya çevrimiçi olarak ağırlıyoruz – sizin için hangisi daha kolaysa.",
            "exp_quote": "Amacımız basit: güvenilir hizmet, maksimum planlama güvenliği ve sizin için en iyi çözüm.",
            "exp_f1_title": "Bağımsızlık",
            "exp_f1_desc": "Bağımsız çalışır ve sizin için en iyisini öneririz.",
            "exp_f2_title": "Şeffaflık",
            "exp_f2_desc": "Bilinçli kararlar alabilmeniz için tarifeleri net bir şekilde karşılaştırıyoruz.",
            "exp_f3_title": "Kişisel Danışmanlık",
            "exp_f3_desc": "Gereksinimlerinizi ve hedeflerinizi anlamak için zaman ayırıyoruz.",
            "exp_f4_title": "Güvenilir Destek",
            "exp_f4_desc": "Kararınızdan önce, sırasında ve sonrasında sizin için buradayız.",
            
            "cta_title": "Sorularınız mı var veya desteğe mi ihtiyacınız var?",
            "cta_desc": "Elektrik, gaz ve internet sözleşmeleriniz için size özel çözümler konusunda yardımcı olmaktan memnuniyet duyarız.",
            "cta_button": "Bağlayıcı olmayan danışmanlık"
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
