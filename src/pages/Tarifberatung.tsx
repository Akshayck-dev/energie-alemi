import { Link, useNavigate } from 'react-router';
import { MapPin, Phone, Mail, Clock, Zap, Flame, Wifi, ArrowRight, ShieldCheck, CheckSquare, Search, Handshake } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import { trackEvent } from '../lib/analytics';

export default function Tarifberatung() {
  const navigate = useNavigate();
  const handleCtaClick = () => {
    trackEvent('service_cta_click', { service_type: 'tarifberatung', cta_location: 'tarifberatung_aachen_page' });
    navigate('/contact');
  };

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO 
        url="/tarifberatung-aachen" 
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-50 dark:bg-[#0f2847]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Tarifberatung in Aachen
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Persönlich, transparent und direkt vor Ort: Ihre individuelle Tarifberatung für Strom, Gas und Internet. Besuchen Sie uns am Alexianergraben 9 in Aachen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" onClick={handleCtaClick} className="w-full sm:w-auto">
                Unverbindliche Anfrage stellen
              </Button>
              <Button variant="outline" onClick={() => navigate('/ratgeber')} className="w-full sm:w-auto">
                Tipps im Ratgeber lesen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-[#0a1628]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <SectionHeader
            title="Unsere Beratungsleistungen"
            subtitle="Alles aus einer Hand in Aachen"
            align="center"
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Strom */}
            <div className="bg-slate-50 dark:bg-[#0f2847] p-8 rounded-2xl border border-slate-100 dark:border-white/5 transition-all hover:shadow-xl group">
              <div className="w-16 h-16 rounded-full bg-amber-400/10 flex items-center justify-center mb-6">
                <Zap className="text-amber-500 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Stromtarife</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Ein passender Stromvergleich, der sich nach Ihrem tatsächlichen Verbrauch in Aachen richtet. Vermeiden Sie versteckte Kosten.
              </p>
              <Link to="/electricity" className="inline-flex items-center text-amber-500 hover:text-amber-600 font-semibold transition-colors">
                Stromtarife vergleichen Aachen <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            {/* Gas */}
            <div className="bg-slate-50 dark:bg-[#0f2847] p-8 rounded-2xl border border-slate-100 dark:border-white/5 transition-all hover:shadow-xl group">
              <div className="w-16 h-16 rounded-full bg-rose-500/10 flex items-center justify-center mb-6">
                <Flame className="text-rose-500 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Gastarife</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Passende Gastarife für Haushalte und Unternehmen. Wir behalten die Preisentwicklung im Blick und finden ein geeignetes Angebot.
              </p>
              <Link to="/gas" className="inline-flex items-center text-rose-500 hover:text-rose-600 font-semibold transition-colors">
                Gastarife vergleichen Aachen <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            {/* Internet */}
            <div className="bg-slate-50 dark:bg-[#0f2847] p-8 rounded-2xl border border-slate-100 dark:border-white/5 transition-all hover:shadow-xl group">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
                <Wifi className="text-blue-500 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Internettarife</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Schnelles Internet ist unverzichtbar. Wir prüfen die lokale Verfügbarkeit von DSL und Glasfaser in Aachen und vermitteln passende Tarife.
              </p>
              <Link to="/internet" className="inline-flex items-center text-blue-500 hover:text-blue-600 font-semibold transition-colors">
                Internettarife vergleichen Aachen <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50 dark:bg-[#0f2847]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <SectionHeader
            title="So funktioniert die Beratung"
            subtitle="Ihr Weg zum passenden Tarif"
            align="center"
          />
          <div className="grid md:grid-cols-4 gap-8 mt-12 relative">
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-slate-200 dark:bg-slate-700 z-0"></div>
            {[
              { icon: Search, title: "1. Analyse", desc: "Gemeinsam sichten wir Ihre aktuellen Verträge." },
              { icon: ShieldCheck, title: "2. Vergleich", desc: "Wir erstellen eine persönliche Übersicht passender Tarife." },
              { icon: Handshake, title: "3. Beratung", desc: "Sie entscheiden in Ruhe, ganz ohne Zwang." },
              { icon: CheckSquare, title: "4. Wechsel", desc: "Wir übernehmen die Formalitäten für Sie." }
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-white dark:bg-[#0a1628] border-4 border-slate-50 dark:border-[#0f2847] shadow-lg flex items-center justify-center mb-6 text-[#0047AB] dark:text-[#f0a83f]">
                    <Icon className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{step.title}</h4>
                  <p className="text-slate-600 dark:text-slate-300">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Location Section */}
      <section className="py-20 bg-white dark:bg-[#0a1628]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="bg-slate-50 dark:bg-[#0f2847] rounded-3xl p-8 md:p-12 border border-slate-100 dark:border-white/5 flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Hilfe beim Anbieterwechsel in Aachen
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Als Ihr lokaler Partner stehen wir Ihnen nicht nur online, sondern auch für eine persönliche Beratung in Aachen und Umgebung zur Verfügung. Wir legen Wert auf Transparenz und eine individuelle Tarifberatung, die sich nach Ihren tatsächlichen Bedürfnissen richtet.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="w-6 h-6 text-[#0047AB] dark:text-[#f0a83f] mt-1 mr-4 shrink-0" />
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-white">Standort</h5>
                    <p className="text-slate-600 dark:text-slate-300">Alexianergraben 9, 52064 Aachen</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="w-6 h-6 text-[#0047AB] dark:text-[#f0a83f] mt-1 mr-4 shrink-0" />
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-white">Telefon</h5>
                    <p className="text-slate-600 dark:text-slate-300">0176 659 493 90</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="w-6 h-6 text-[#0047AB] dark:text-[#f0a83f] mt-1 mr-4 shrink-0" />
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-white">E-Mail</h5>
                    <p className="text-slate-600 dark:text-slate-300">info@energie-alemi.de</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="w-6 h-6 text-[#0047AB] dark:text-[#f0a83f] mt-1 mr-4 shrink-0" />
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-white">Öffnungszeiten</h5>
                    <p className="text-slate-600 dark:text-slate-300">Mo-Sa: 10:00 - 19:00 Uhr</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
              <div className="w-full h-full min-h-[300px] bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden relative flex flex-col items-center justify-center text-center p-8 border border-slate-300 dark:border-slate-700">
                  <MapPin className="w-16 h-16 mb-4 text-slate-400 dark:text-slate-500" />
                  <p className="text-slate-500 dark:text-slate-400 font-medium">Persönliche Beratung<br/>für Aachen und Umgebung</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
