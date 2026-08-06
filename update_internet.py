import json
import os

locales_dir = "public/locales"
langs = ["en", "de", "ar", "tr"]

data = {
    "en": {
        "internet": {
            "hero_t1": "Compare internet plans",
            "hero_t2": "and find the right connection",
            "hero_desc": "Many companies are still using internet contracts that no longer meet their needs. We can help you find the right internet or DSL plan – in person in Aachen or conveniently online.",
            "f1_t": "Tariff comparisons",
            "f1_d": "We compare numerous tariffs from different providers and show you suitable options for your company.",
            "f2_t": "Advice on internet contracts",
            "f2_d": "We will explain the differences between DSL, cable internet and fiber optics in an easy-to-understand way.",
            "f3_t": "Switching providers",
            "f3_d": "If you decide to sign up for a new internet contract, we will assist you with the switchover and answer any questions.",
            "f4_t": "Connection options",
            "f4_d": "Depending on your location, different technologies may be available. We will work together to determine which solution is suitable.",
            "tl_sub": "HOW IT WORKS",
            "tl_t1": "In 4 simple steps to the right",
            "tl_t_high": "internet plan",
            "tl_desc": "Our process is transparent, efficient and designed to get you the best internet solution with minimal effort.",
            "tl_graphic": "Fast and reliable connections",
            "s1_t": "Schedule a consultation appointment",
            "s1_d": "The first step to finding the right internet contract is a personal consultation. You can visit us directly at our store in the center of Aachen or contact us online. In a non-obligation consultation, we'll discuss your current internet situation and your requirements.",
            "s2_t": "Compare internet plans",
            "s2_d": "Based on your information, we compare various internet and DSL plans from different providers. We consider important factors such as speed, contract duration, price, and available connection types at your location.",
            "s3_t": "Make decision",
            "s3_d": "After we've presented you with suitable tariff options, you can take your time to decide which plan best fits your needs. We'll explain all contract details and answer your questions so you can make a well-informed decision.",
            "s4_t": "Switch providers",
            "s4_d": "Once you've chosen a new internet plan, we'll support you throughout the entire switching process. In many cases, the new provider will handle the cancellation of your existing contract and organize the transfer of your connection.",
            "faq_sub": "FAQ",
            "faq_t": "Frequently asked questions",
            "q1": "Is switching providers complicated?",
            "a1": "No. The new provider usually handles the organizational steps.",
            "q2": "Will there be an internet outage?",
            "a2": "The changeover is organized in such a way that the interruption remains as short as possible.",
            "q3": "What internet speed do I need?",
            "a3": "That depends on how it will be used in your household. We'd be happy to advise you on suitable options.",
            "btn": "Non-binding consultation"
        }
    },
    "de": {
        "internet": {
            "hero_t1": "Internettarife vergleichen",
            "hero_t2": "und den passenden Anschluss finden",
            "hero_desc": "Viele Unternehmen nutzen noch Internetverträge, die nicht mehr ihren Anforderungen entsprechen. Wir helfen Ihnen, den richtigen Internet- oder DSL-Tarif zu finden – persönlich in Aachen oder bequem online.",
            "f1_t": "Tarifvergleiche",
            "f1_d": "Wir vergleichen zahlreiche Tarife verschiedener Anbieter und zeigen Ihnen passende Optionen für Ihr Unternehmen.",
            "f2_t": "Beratung zu Internetverträgen",
            "f2_d": "Wir erklären Ihnen die Unterschiede zwischen DSL, Kabelinternet und Glasfaser verständlich.",
            "f3_t": "Anbieterwechsel",
            "f3_d": "Wenn Sie sich für einen neuen Internetvertrag entscheiden, unterstützen wir Sie beim Wechsel und beantworten alle Fragen.",
            "f4_t": "Anschlussmöglichkeiten",
            "f4_d": "Je nach Standort können unterschiedliche Technologien verfügbar sein. Wir ermitteln gemeinsam, welche Lösung geeignet ist.",
            "tl_sub": "WIE ES FUNKTIONIERT",
            "tl_t1": "In 4 einfachen Schritten zum richtigen",
            "tl_t_high": "Internettarif",
            "tl_desc": "Unser Prozess ist transparent, effizient und darauf ausgelegt, Ihnen mit minimalem Aufwand die beste Internetlösung zu verschaffen.",
            "tl_graphic": "Schnelle und zuverlässige Verbindungen",
            "s1_t": "Beratungstermin vereinbaren",
            "s1_d": "Der erste Schritt zum richtigen Internetvertrag ist eine persönliche Beratung. Sie können uns direkt in unserem Geschäft im Zentrum von Aachen besuchen oder uns online kontaktieren. In einer unverbindlichen Beratung besprechen wir Ihre aktuelle Internetsituation und Ihre Anforderungen.",
            "s2_t": "Internettarife vergleichen",
            "s2_d": "Basierend auf Ihren Angaben vergleichen wir verschiedene Internet- und DSL-Tarife unterschiedlicher Anbieter. Dabei berücksichtigen wir wichtige Faktoren wie Geschwindigkeit, Vertragslaufzeit, Preis und verfügbare Anschlussarten an Ihrem Standort.",
            "s3_t": "Entscheidung treffen",
            "s3_d": "Nachdem wir Ihnen passende Tarifoptionen vorgestellt haben, können Sie in Ruhe entscheiden, welcher Tarif am besten zu Ihren Bedürfnissen passt. Wir erklären Ihnen alle Vertragsdetails und beantworten Ihre Fragen, damit Sie eine fundierte Entscheidung treffen können.",
            "s4_t": "Anbieter wechseln",
            "s4_d": "Sobald Sie sich für einen neuen Internettarif entschieden haben, unterstützen wir Sie während des gesamten Wechselprozesses. In vielen Fällen übernimmt der neue Anbieter die Kündigung Ihres bestehenden Vertrages und organisiert die Übernahme Ihres Anschlusses.",
            "faq_sub": "FAQ",
            "faq_t": "Häufig gestellte Fragen",
            "q1": "Ist ein Anbieterwechsel kompliziert?",
            "a1": "Nein. Der neue Anbieter übernimmt in der Regel die organisatorischen Schritte.",
            "q2": "Wird es einen Internetausfall geben?",
            "a2": "Die Umstellung wird so organisiert, dass die Unterbrechung so kurz wie möglich ausfällt.",
            "q3": "Welche Internetgeschwindigkeit benötige ich?",
            "a3": "Das hängt von der Nutzung in Ihrem Haushalt ab. Wir beraten Sie gerne zu passenden Optionen.",
            "btn": "Unverbindliche Beratung"
        }
    },
    "ar": {
        "internet": {
            "hero_t1": "قارن خطط الإنترنت",
            "hero_t2": "واجد الاتصال المناسب",
            "hero_desc": "لا تزال العديد من الشركات تستخدم عقود إنترنت لم تعد تلبي احتياجاتها. يمكننا مساعدتك في العثور على خطة الإنترنت أو DSL المناسبة - شخصيًا في آخن أو بشكل مريح عبر الإنترنت.",
            "f1_t": "مقارنات التعريفة",
            "f1_d": "نقوم بمقارنة العديد من التعريفات من مختلف المزودين ونعرض لك الخيارات المناسبة لشركتك.",
            "f2_t": "نصائح حول عقود الإنترنت",
            "f2_d": "سنشرح لك الاختلافات بين DSL وإنترنت الكابل والألياف البصرية بطريقة سهلة الفهم.",
            "f3_t": "تبديل المزودين",
            "f3_d": "إذا قررت الاشتراك في عقد إنترنت جديد، فسنساعدك في عملية التبديل ونجيب على أي أسئلة.",
            "f4_t": "خيارات الاتصال",
            "f4_d": "اعتمادًا على موقعك، قد تتوفر تقنيات مختلفة. سنعمل معًا لتحديد الحل المناسب.",
            "tl_sub": "كيف يعمل",
            "tl_t1": "في 4 خطوات بسيطة نحو",
            "tl_t_high": "خطة الإنترنت",
            "tl_desc": "عمليتنا شفافة وفعالة ومصممة للحصول على أفضل حل إنترنت بأقل جهد.",
            "tl_graphic": "اتصالات سريعة وموثوقة",
            "s1_t": "حدد موعداً للاستشارة",
            "s1_d": "الخطوة الأولى للعثور على عقد الإنترنت المناسب هي الاستشارة الشخصية. يمكنك زيارتنا مباشرة في متجرنا في وسط آخن أو الاتصال بنا عبر الإنترنت. في استشارة غير ملزمة، سنناقش وضع الإنترنت الحالي الخاص بك ومتطلباتك.",
            "s2_t": "مقارنة خطط الإنترنت",
            "s2_d": "بناءً على معلوماتك، نقوم بمقارنة خطط الإنترنت و DSL المختلفة من مختلف المزودين. نأخذ في الاعتبار العوامل الهامة مثل السرعة، ومدة العقد، والسعر، وأنواع الاتصال المتاحة في موقعك.",
            "s3_t": "اتخاذ قرار",
            "s3_d": "بعد تقديم خيارات التعريفة المناسبة لك، يمكنك أن تأخذ وقتك لتقرر أي خطة تناسب احتياجاتك بشكل أفضل. سنشرح جميع تفاصيل العقد ونجيب على أسئلتك حتى تتمكن من اتخاذ قرار مدروس.",
            "s4_t": "تبديل المزودين",
            "s4_d": "بمجرد اختيارك خطة إنترنت جديدة، سندعمك طوال عملية التبديل بأكملها. في كثير من الحالات، سيتولى المزود الجديد إلغاء عقدك الحالي وتنظيم نقل اتصالك.",
            "faq_sub": "الأسئلة الشائعة",
            "faq_t": "الأسئلة المتداولة",
            "q1": "هل تبديل المزودين معقد؟",
            "a1": "لا. يتولى المزود الجديد عادةً الخطوات التنظيمية.",
            "q2": "هل سيكون هناك انقطاع في الإنترنت؟",
            "a2": "يتم تنظيم التبديل بحيث يكون الانقطاع قصيرًا قدر الإمكان.",
            "q3": "ما سرعة الإنترنت التي أحتاجها؟",
            "a3": "هذا يعتمد على كيفية استخدامه في منزلك. يسعدنا تقديم النصح لك بشأن الخيارات المناسبة.",
            "btn": "استشارة غير ملزمة"
        }
    },
    "tr": {
        "internet": {
            "hero_t1": "İnternet planlarını karşılaştırın",
            "hero_t2": "ve doğru bağlantıyı bulun",
            "hero_desc": "Birçok şirket hala ihtiyaçlarını karşılamayan internet sözleşmeleri kullanıyor. Doğru internet veya DSL planını bulmanıza yardımcı olabiliriz - şahsen Aachen'da veya çevrimiçi olarak.",
            "f1_t": "Tarife karşılaştırmaları",
            "f1_d": "Farklı sağlayıcılardan sayısız tarifeyi karşılaştırıyor ve şirketiniz için uygun seçenekleri gösteriyoruz.",
            "f2_t": "İnternet sözleşmeleri hakkında danışmanlık",
            "f2_d": "DSL, kablo internet ve fiber optik arasındaki farkları anlaşılması kolay bir şekilde açıklayacağız.",
            "f3_t": "Sağlayıcı değiştirme",
            "f3_d": "Yeni bir internet sözleşmesine kaydolmaya karar verirseniz, geçişte size yardımcı olacak ve tüm sorularınızı yanıtlayacağız.",
            "f4_t": "Bağlantı seçenekleri",
            "f4_d": "Bulunduğunuz yere bağlı olarak farklı teknolojiler mevcut olabilir. Hangi çözümün uygun olduğunu belirlemek için birlikte çalışacağız.",
            "tl_sub": "NASIL ÇALIŞIR",
            "tl_t1": "Doğru",
            "tl_t_high": "internet planına 4 basit adımda",
            "tl_desc": "Sürecimiz şeffaf, verimli ve en az çabayla en iyi internet çözümünü elde etmeniz için tasarlanmıştır.",
            "tl_graphic": "Hızlı ve güvenilir bağlantılar",
            "s1_t": "Bir danışmanlık randevusu planlayın",
            "s1_d": "Doğru internet sözleşmesini bulmanın ilk adımı kişisel bir danışmanlıktır. Bizi doğrudan Aachen'in merkezindeki mağazamızda ziyaret edebilir veya çevrimiçi olarak iletişime geçebilirsiniz. Bağlayıcı olmayan bir danışmanlıkta, mevcut internet durumunuzu ve gereksinimlerinizi tartışacağız.",
            "s2_t": "İnternet planlarını karşılaştırın",
            "s2_d": "Bilgilerinize dayanarak, farklı sağlayıcılardan çeşitli internet ve DSL planlarını karşılaştırıyoruz. Hız, sözleşme süresi, fiyat ve bulunduğunuz yerdeki mevcut bağlantı türleri gibi önemli faktörleri göz önünde bulunduruyoruz.",
            "s3_t": "Karar verin",
            "s3_d": "Size uygun tarife seçeneklerini sunduktan sonra, hangi planın ihtiyaçlarınıza en uygun olduğuna karar vermek için zaman ayırabilirsiniz. Bilinçli bir karar verebilmeniz için tüm sözleşme ayrıntılarını açıklayacak ve sorularınızı yanıtlayacağız.",
            "s4_t": "Sağlayıcı değiştirin",
            "s4_d": "Yeni bir internet planı seçtiğinizde, tüm geçiş sürecinde sizi destekleyeceğiz. Çoğu durumda, yeni sağlayıcı mevcut sözleşmenizin iptalini halledecek ve bağlantınızın aktarımını organize edecektir.",
            "faq_sub": "SSS",
            "faq_t": "Sıkça sorulan sorular",
            "q1": "Sağlayıcı değiştirmek karmaşık mıdır?",
            "a1": "Hayır. Yeni sağlayıcı genellikle organizasyonel adımları halleder.",
            "q2": "İnternet kesintisi olacak mı?",
            "a2": "Geçiş, kesinti olabildiğince kısa kalacak şekilde organize edilir.",
            "q3": "Hangi internet hızına ihtiyacım var?",
            "a3": "Bu, hanenizde nasıl kullanılacağına bağlıdır. Uygun seçenekler konusunda size tavsiyede bulunmaktan memnuniyet duyarız.",
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
