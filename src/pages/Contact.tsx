import { Mail, Phone, MapPin, Clock, ShieldCheck, LineChart, Handshake, PhoneCall, Zap, ArrowRight, Headset, Flame } from 'lucide-react';

import { useTranslation } from 'react-i18next';
import ContactForm from '../components/ContactForm';
import { cn } from '../lib/utils';
import SEO from "../components/SEO";
import { trackEvent } from '../lib/analytics';

export default function Contact() {
  const { t, i18n } = useTranslation();

  return (
    <div className="relative bg-slate-50 dark:bg-[#051024] min-h-screen font-sans text-slate-900 dark:text-white">
      <SEO url="/contact" />
      {/* Hero Section */}
      <div className="sticky top-0 z-0 md:relative">
        <section className="relative min-h-[60vh] md:min-h-[65vh] lg:min-h-[80vh] flex items-center pt-28 pb-32 overflow-hidden bg-white dark:bg-[#051024]">
          <div className="container mx-auto px-5 md:px-10 max-w-[1240px] relative z-20">
            <div className="md:grid md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:items-center">
              
              {/* Left Header Content */}
              <div className="pt-8 md:pt-0">
                <div className="flex items-center gap-2 text-[11px] md:text-[12px] font-bold tracking-[0.15em] uppercase text-[#f0a83f] mb-4">
                  <div className="w-6 h-[2px] bg-[#f0a83f] rounded-sm"></div>
                  {t('contact.header_sub')}
                </div>
                
                <h1 className="font-heading text-[44px] md:text-[64px] lg:text-[72px] leading-[1.05] font-extrabold text-[#00173A] dark:text-white mb-6 tracking-[-0.02em]">
                  {t('contact.header_t1')}<br />
                  <span className="text-[#f0a83f]">{t('contact.header_t2')}</span>
                </h1>
                
                <p className="text-[16px] md:text-[18px] leading-[1.6] text-slate-600 dark:text-white/80 max-w-[500px] mb-10 font-medium">
                  {t('contact.header_desc')}
                  <br /><br />
                  <span>{t('contact.visit_p1')}</span>
                  <span className="text-[#0047AB] dark:text-[#f0a83f] font-semibold">{t('contact.visit_l1')}</span>
                  <span>.</span>
                </p>
                
                {/* Features Row */}
                <div className="flex flex-wrap md:flex-nowrap gap-8 md:gap-12 mb-10">
                  <div className="flex flex-col gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#f0f4ff] dark:bg-[#0c1d3d] flex items-center justify-center text-[#0047AB] dark:text-[#60a5fa] border border-[#e2e8f0] dark:border-white/10">
                      <PhoneCall size={20} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#00173A] dark:text-white text-[15px] mb-1">{t('contact.f1_t')}</h4>
                      <p className="text-slate-500 dark:text-white/60 text-[13px]">{t('contact.f1_d')}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#f0f4ff] dark:bg-[#0c1d3d] flex items-center justify-center text-[#0047AB] dark:text-[#60a5fa] border border-[#e2e8f0] dark:border-white/10">
                      <Zap size={20} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#00173A] dark:text-white text-[15px] mb-1">{t('contact.f2_t')}</h4>
                      <p className="text-slate-500 dark:text-white/60 text-[13px]">{t('contact.f2_d')}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#f0f4ff] dark:bg-[#0c1d3d] flex items-center justify-center text-[#0047AB] dark:text-[#60a5fa] border border-[#e2e8f0] dark:border-white/10">
                      <ShieldCheck size={20} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#00173A] dark:text-white text-[15px] mb-1">{t('contact.f3_t')}</h4>
                      <p className="text-slate-500 dark:text-white/60 text-[13px]">{t('contact.f3_d')}</p>
                    </div>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <a data-track="phone" 
                    href="tel:+4917665949390" 
                    onClick={() => trackEvent('phone_click', { cta_location: 'contact_page_cta', page_path: window.location.pathname })}
                    className="bg-[#0047AB] hover:bg-[#003380] text-white px-8 py-3.5 rounded-full font-bold text-[15px] flex items-center gap-2 transition-colors w-full sm:w-auto justify-center group shadow-md shadow-blue-900/20"
                  >
                    <PhoneCall size={18} strokeWidth={2} />
                    {t('contact.btn_call')}
                    <ArrowRight size={18} strokeWidth={2} className={cn("ltr:ml-1 rtl:mr-1 transition-transform", i18n.dir() === 'rtl' ? "group-hover:-translate-x-1 rotate-180" : "group-hover:translate-x-1")} />
                  </a>
                  <a 
                    href="mailto:webloveyfreelance@gmail.com" 
                    onClick={() => trackEvent('email_click', { cta_location: 'contact_page_cta', page_path: window.location.pathname })}
                    className="text-[#0047AB] dark:text-[#60a5fa] font-bold text-[15px] hover:text-[#003380] dark:hover:text-white transition-colors border-b-2 border-[#0047AB]/30 dark:border-[#60a5fa]/30 hover:border-[#0047AB] dark:hover:border-[#60a5fa] pb-1"
                  >
                    {t('contact.btn_msg')}
                  </a>
                </div>
              </div>
              
              {/* Right Column Graphic */}
              <div className="hidden lg:flex relative h-[500px] items-center justify-center w-full mt-10 md:mt-0">
                {/* Decorative dashed/dotted circles */}
                <div className="absolute w-[450px] h-[450px] rounded-full border-[1.5px] border-dashed border-[#cbd5e1] dark:border-white/10 animate-[spin_120s_linear_infinite]" />
                <div className="absolute w-[320px] h-[320px] rounded-full border-[1.5px] border-dotted border-[#94a3b8] dark:border-white/20 shadow-[inset_0_0_40px_rgba(0,0,0,0.02)]" />
                <div className="absolute w-[220px] h-[220px] rounded-full border border-slate-100 dark:border-white/5 bg-slate-50/90 dark:bg-[#0a1628]/90" />
                
                {/* Floating elements */}
                <div className="absolute top-[15%] right-[22%] w-11 h-11 bg-[#f0a83f] rounded-full flex items-center justify-center text-white shadow-lg z-20">
                  <Zap size={18} fill="currentColor" />
                </div>
                <div className="absolute bottom-[22%] left-[18%] w-14 h-14 bg-[#0047AB] rounded-full flex items-center justify-center text-white shadow-[0_10px_25px_rgba(0,71,171,0.4)] z-20">
                  <Flame size={24} fill="currentColor" />
                </div>
                
                {/* Floating tiny dots */}
                <div className="absolute top-[35%] left-[8%] w-3 h-3 bg-[#f0a83f] rounded-full shadow-md z-10" />
                <div className="absolute top-[45%] left-[5%] w-6 h-6 bg-blue-100 dark:bg-blue-900/50 rounded-full shadow-sm z-10" />
                <div className="absolute bottom-[40%] right-[12%] w-3 h-3 bg-[#0047AB] rounded-full opacity-50 z-10" />
                
                {/* Center Graphic Placeholder (Headset) */}
                <div className="relative z-10 w-[180px] h-[180px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-50 dark:from-[#0c1d3d] dark:to-[#051024] rounded-full shadow-2xl overflow-hidden flex items-center justify-center border-[6px] border-white dark:border-[#0a1628]">
                    <Headset size={72} className="text-[#00173A] dark:text-white drop-shadow-lg" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Soft SVG Wave at the bottom */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] md:h-[140px] drop-shadow-sm">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-slate-50 dark:fill-[#0a1628]"></path>
            </svg>
          </div>
        </section>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <section className="px-5 md:px-10 pt-16 md:pt-24 pb-14 md:pb-[100px] max-w-[1240px] mx-auto">
          <div className="md:grid md:grid-cols-[1.5fr_1fr] md:gap-[32px] items-start">
            <div className="w-full mb-10 md:mb-0">
              <ContactForm />
            </div>
            
            <div className="w-full flex flex-col gap-10 md:gap-[24px]">
              {/* Contact Info Block */}
              <div className="bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-white/10 p-6 md:p-[34px_30px] rounded-[20px] md:rounded-[22px] text-slate-900 dark:text-white shadow-sm relative overflow-hidden">
                <h3 className="font-heading text-[19px] md:text-[21px] font-extrabold mb-4 md:mb-[22px] relative z-10 tracking-[-0.01em]">
                  {t('contact.info_title')}
                </h3>
                
                <div className="flex flex-col relative z-10">
                  {/* Phone */}
                  <div className="flex gap-3.5 md:gap-[16px] items-start py-3.5 md:py-[16px] border-b border-slate-100 dark:border-white/5 md:border-t md:border-b-0 md:first:border-t-0">
                    <div className="w-[42px] h-[42px] md:w-[46px] md:h-[46px] bg-[#f0a83f]/15 rounded-xl md:rounded-[13px] flex items-center justify-center shrink-0">
                      <Phone size={19} strokeWidth={1.5} className="text-[#f0a83f]" />
                    </div>
                    <div>
                      <p className="text-slate-500 dark:text-white/60 text-[11px] md:text-[11.5px] font-bold uppercase tracking-[0.08em] mb-[3px] md:mb-1">{t('contact.lbl_phone')}</p>
                      <p className="font-semibold text-[15px] md:text-[16px] leading-[1.4]">0176 659 493 90</p>
                    </div>
                  </div>
                  
                  {/* E-Mail */}
                  <div className="flex gap-3.5 md:gap-[16px] items-start py-3.5 md:py-[16px] border-b border-slate-100 dark:border-white/5 md:border-t md:border-b-0">
                    <div className="w-[42px] h-[42px] md:w-[46px] md:h-[46px] bg-[#f0a83f]/15 rounded-xl md:rounded-[13px] flex items-center justify-center shrink-0">
                      <Mail size={19} strokeWidth={1.5} className="text-[#f0a83f]" />
                    </div>
                    <div>
                      <p className="text-slate-500 dark:text-white/60 text-[11px] md:text-[11.5px] font-bold uppercase tracking-[0.08em] mb-[3px] md:mb-1">{t('contact.lbl_email')}</p>
                      <p className="font-semibold text-[15px] md:text-[16px] leading-[1.4]">webloveyfreelance@gmail.com</p>
                    </div>
                  </div>
                  
                  {/* Address */}
                  <div className="flex gap-3.5 md:gap-[16px] items-start py-3.5 md:py-[16px] border-b border-slate-100 dark:border-white/5 md:border-t md:border-b-0">
                    <div className="w-[42px] h-[42px] md:w-[46px] md:h-[46px] bg-[#f0a83f]/15 rounded-xl md:rounded-[13px] flex items-center justify-center shrink-0">
                      <MapPin size={19} strokeWidth={1.5} className="text-[#f0a83f]" />
                    </div>
                    <div>
                      <p className="text-slate-500 dark:text-white/60 text-[11px] md:text-[11.5px] font-bold uppercase tracking-[0.08em] mb-[3px] md:mb-1">{t('contact.lbl_addr')}</p>
                      <p className="font-semibold text-[15px] md:text-[16px] leading-[1.4]">
                        Alexianergraben 9<br/>52064 Aachen<br/>
                        <a data-track="google-maps" 
                          href="https://www.google.com/maps/search/?api=1&query=Energie+Alemi+Alexianergraben+9+52064+Aachen" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-sm font-bold text-[#0047AB] dark:text-[#f0a83f] hover:underline mt-1 inline-block"
                        >
                          Google Maps
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  {/* Office Hours */}
                  <div className="flex gap-3.5 md:gap-[16px] items-start py-3.5 md:py-[16px] md:border-t md:border-slate-100 md:dark:border-white/5">
                    <div className="w-[42px] h-[42px] md:w-[46px] md:h-[46px] bg-[#f0a83f]/15 rounded-xl md:rounded-[13px] flex items-center justify-center shrink-0">
                      <Clock size={19} strokeWidth={1.5} className="text-[#f0a83f]" />
                    </div>
                    <div>
                      <p className="text-slate-500 dark:text-white/60 text-[11px] md:text-[11.5px] font-bold uppercase tracking-[0.08em] mb-[3px] md:mb-1">{t('contact.lbl_hours')}</p>
                      <p className="font-semibold text-[15px] md:text-[16px] leading-[1.4]">{t('contact.val_hours')}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Why choose us Block */}
              <div className="bg-white dark:bg-[#0a1628] p-6 md:p-[32px_30px] rounded-[20px] md:rounded-[22px] shadow-[0_4px_16px_rgba(10,22,40,0.06)] md:shadow-[0_8px_24px_rgba(10,22,40,0.06)] border border-[#e5e9f0] dark:border-white/10">
                <h3 className="font-heading text-[19px] md:text-[21px] font-extrabold text-[#101828] dark:text-white mb-4 md:mb-[22px] tracking-[-0.01em]">
                  {t('contact.why_title')}
                </h3>
                
                <div className="flex flex-col">
                  {/* Point 1 */}
                  <div className="flex gap-3.5 md:gap-[16px] items-start py-4 md:py-[18px] border-b border-[#e5e9f0] dark:border-white/10 md:border-t md:border-b-0 md:first:border-t-0">
                    <div className="w-[42px] h-[42px] md:w-[46px] md:h-[46px] bg-slate-50 dark:bg-[#051024] rounded-xl md:rounded-[13px] flex items-center justify-center text-[#f0a83f] shrink-0 border border-slate-200 dark:border-white/10">
                      <ShieldCheck size={19} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-heading text-[15.5px] md:text-[16px] font-bold text-[#101828] dark:text-white mb-1">{t('contact.why_f1_t')}</h4>
                      <p className="text-[#475467] dark:text-slate-300 text-[13.5px] md:text-[14px] leading-[1.55]">{t('contact.why_f1_d')}</p>
                    </div>
                  </div>
                  
                  {/* Point 2 */}
                  <div className="flex gap-3.5 md:gap-[16px] items-start py-4 md:py-[18px] border-b border-[#e5e9f0] dark:border-white/10 md:border-t md:border-b-0">
                    <div className="w-[42px] h-[42px] md:w-[46px] md:h-[46px] bg-slate-50 dark:bg-[#051024] rounded-xl md:rounded-[13px] flex items-center justify-center text-[#f0a83f] shrink-0 border border-slate-200 dark:border-white/10">
                      <LineChart size={19} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-heading text-[15.5px] md:text-[16px] font-bold text-[#101828] dark:text-white mb-1">{t('contact.why_f2_t')}</h4>
                      <p className="text-[#475467] dark:text-slate-300 text-[13.5px] md:text-[14px] leading-[1.55]">{t('contact.why_f2_d')}</p>
                    </div>
                  </div>
                  
                  {/* Point 3 */}
                  <div className="flex gap-3.5 md:gap-[16px] items-start py-4 md:py-[18px] md:border-t md:border-[#e5e9f0] md:dark:border-white/10">
                    <div className="w-[42px] h-[42px] md:w-[46px] md:h-[46px] bg-slate-50 dark:bg-[#051024] rounded-xl md:rounded-[13px] flex items-center justify-center text-[#f0a83f] shrink-0 border border-slate-200 dark:border-white/10">
                      <Handshake size={19} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-heading text-[15.5px] md:text-[16px] font-bold text-[#101828] dark:text-white mb-1">{t('contact.why_f3_t')}</h4>
                      <p className="text-[#475467] dark:text-slate-300 text-[13.5px] md:text-[14px] leading-[1.55]">{t('contact.why_f3_d')}</p>
                    </div>
                  </div>
                </div>
              </div>

            <div className="w-full flex flex-col gap-10 mt-16 col-span-1 md:col-span-2">
              <div className="bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-white/10 p-8 rounded-[20px] shadow-sm text-slate-900 dark:text-white">
                <h2 className="text-2xl font-bold mb-6 text-[#101828] dark:text-white">{i18n.language === 'en' ? 'What happens after your request?' : 'Was passiert nach Ihrer Anfrage?'}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-bold text-[#0047AB] dark:text-[#60a5fa] mb-2 text-lg">{i18n.language === 'en' ? '1. Fast Response' : '1. Schnelle Rückmeldung'}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{i18n.language === 'en' ? 'We review your request and usually get back to you by phone or email within 24 hours.' : 'Wir sichten Ihre Anfrage und melden uns in der Regel innerhalb von 24 Stunden telefonisch oder per E-Mail bei Ihnen zurück.'}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0047AB] dark:text-[#60a5fa] mb-2 text-lg">{i18n.language === 'en' ? '2. Free Initial Consultation' : '2. Kostenloses Erstgespräch'}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{i18n.language === 'en' ? 'In a brief conversation, we clarify your current energy needs, check your existing contract, and discuss your wishes.' : 'In einem kurzen Gespräch klären wir Ihren aktuellen Energiebedarf, prüfen Ihren bestehenden Vertrag und besprechen Ihre Wünsche.'}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0047AB] dark:text-[#60a5fa] mb-2 text-lg">{i18n.language === 'en' ? '3. Non-Binding Offer' : '3. Unverbindliches Angebot'}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{i18n.language === 'en' ? 'You will receive a tailor-made tariff proposal from us. If you agree, we will handle the entire switching process for you.' : 'Sie erhalten von uns einen passgenauen Tarifvorschlag. Wenn Sie einverstanden sind, übernehmen wir die komplette Wechselabwicklung für Sie.'}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-white/10 p-8 rounded-[20px] shadow-sm text-slate-900 dark:text-white">
                <h2 className="text-2xl font-bold mb-4 text-[#101828] dark:text-white">{i18n.language === 'en' ? 'Personal Consultation on Site in Aachen' : 'Persönliche Beratung vor Ort in Aachen'}</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {i18n.language === 'en' ? 'We believe in the value of personal conversation. Instead of clicking through impersonal online portals, we cordially invite you to our office at Alexianergraben 9, 52064 Aachen. Just bring your latest electricity or gas bill. We will look at it together and find the best potential savings for you.' : 'Wir glauben an den Wert des persönlichen Gesprächs. Anstatt sich durch unpersönliche Online-Portale zu klicken, laden wir Sie herzlich in unser Büro am Alexianergraben 9, 52064 Aachen ein. Bringen Sie einfach Ihre letzte Strom- oder Gasabrechnung mit. Wir schauen gemeinsam darauf und finden die besten Sparpotenziale für Sie.'} 
                  <br/><br/>
                  {i18n.language === 'en' ? 'Use our' : 'Nutzen Sie unseren'} <a data-track="google-maps" href="https://maps.app.goo.gl/PD45bFPqEn6h4Udw9" target="_blank" rel="noopener noreferrer" className="text-[#0047AB] dark:text-[#60a5fa] font-semibold hover:underline">{i18n.language === 'en' ? 'Google Maps link' : 'Google Maps Link'}</a>{i18n.language === 'en' ? ' to find your way directly to us.' : ', um direkt den Weg zu uns zu finden.'}
                </p>
              </div>

              <div className="bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-white/10 p-8 rounded-[20px] shadow-sm text-slate-900 dark:text-white">
                <h2 className="text-2xl font-bold mb-6 text-[#101828] dark:text-white">{i18n.language === 'en' ? 'Common Concerns of Our Customers' : 'Häufige Anliegen unserer Kunden'}</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#0047AB] pl-4">
                    <h3 className="font-bold text-lg">{i18n.language === 'en' ? 'Electricity bill too high?' : 'Stromrechnung zu hoch?'}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{i18n.language === 'en' ? 'We check your tariff and compare it with current offers. Learn more on our ' : 'Wir prüfen Ihren Tarif und vergleichen ihn mit aktuellen Angeboten. Erfahren Sie mehr auf unserer '}<a href="/electricity" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-medium">{i18n.language === 'en' ? 'page for switching electricity providers' : 'Seite zum Stromanbieterwechsel'}</a>.</p>
                  </div>
                  <div className="border-l-4 border-[#f0a83f] pl-4">
                    <h3 className="font-bold text-lg">{i18n.language === 'en' ? 'Are you planning a move?' : 'Sie planen einen Umzug?'}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{i18n.language === 'en' ? 'A move is the perfect time for a switch. We ensure that you are supplied affordably right away at your new home. You can find tips in the ' : 'Ein Umzug ist der perfekte Zeitpunkt für einen Wechsel. Wir stellen sicher, dass Sie am neuen Wohnort direkt günstig versorgt sind. Tipps finden Sie im '}<a href="/ratgeber/umzug-aachen-strom-gas-internet" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-medium">{i18n.language === 'en' ? 'guide for moving in Aachen' : 'Ratgeber Umzug in Aachen'}</a>.</p>
                  </div>
                  <div className="border-l-4 border-[#10b981] pl-4">
                    <h3 className="font-bold text-lg">{i18n.language === 'en' ? 'Want a gas comparison?' : 'Gasvergleich gewünscht?'}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{i18n.language === 'en' ? 'Secure long-term price guarantees and protect yourself against strong price fluctuations. Visit our ' : 'Sichern Sie sich langfristige Preisgarantien und schützen Sie sich vor starken Preisschwankungen. Besuchen Sie unsere '}<a href="/gas" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-medium">{i18n.language === 'en' ? 'gas provider page' : 'Gasanbieter-Seite'}</a>.</p>
                  </div>
                  <div className="border-l-4 border-[#8b5cf6] pl-4">
                    <h3 className="font-bold text-lg">{i18n.language === 'en' ? 'Internet too slow or too expensive?' : 'Internet zu langsam oder zu teuer?'}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{i18n.language === 'en' ? 'We check the availability of DSL, cable, and fiber optics at your address. Information is available in our section for ' : 'Wir prüfen die Verfügbarkeit von DSL, Kabel und Glasfaser an Ihrer Adresse. Infos gibt es in unserem Bereich für '}<a href="/internet" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-medium">{i18n.language === 'en' ? 'internet contracts' : 'Internetverträge'}</a>.</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>
      </div>

      {/* Map Section */}
      <div className="relative z-20 bg-slate-50 dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <section className="pb-8 md:pb-[40px] px-5 md:px-10 max-w-[1240px] mx-auto flex flex-col gap-6">
          <div className="relative rounded-[20px] md:rounded-[22px] overflow-hidden p-6 md:p-[46px_48px] text-slate-900 dark:text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-[30px] border border-slate-200 dark:border-white/10 shadow-sm bg-[linear-gradient(120deg,rgba(255,255,255,0.94),rgba(255,255,255,0.72)),repeating-linear-gradient(45deg,#f1f5f9_0_2px,#f8fafc_2px_40px)] dark:bg-[linear-gradient(120deg,rgba(5,16,36,0.94),rgba(5,16,36,0.72)),repeating-linear-gradient(45deg,#0a1628_0_2px,#051024_2px_40px)]">
            
            <div className="flex items-start gap-4 md:gap-[22px] max-w-[640px]">
              {/* Desktop Pin */}
              <div className="hidden md:flex w-[52px] h-[52px] shrink-0 border-[1.5px] border-[#f0a83f] rounded-full items-center justify-center text-[#f0a83f]">
                <MapPin size={22} strokeWidth={1.6} />
              </div>
              
              <div>
                {/* Mobile Tag & Pin */}
                <div className="md:hidden inline-flex items-center gap-[6px] text-[11px] font-bold tracking-[0.1em] text-[#f0a83f] uppercase mb-3.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#f0a83f]"></div>
                  {t('contact.map_tag')}
                </div>
                <div className="md:hidden w-11 h-11 border-[1.5px] border-[#f0a83f] rounded-full flex items-center justify-center text-[#f0a83f] mb-3.5">
                  <MapPin size={20} strokeWidth={1.6} />
                </div>
                
                <h3 className="font-heading text-[19px] md:text-[24px] font-extrabold tracking-[-0.01em] mb-2 md:mb-[8px]">{t('contact.map_title')}</h3>
                <p className="text-[13.5px] md:text-[15px] text-slate-600 dark:text-white/80 md:text-slate-600 dark:text-white/80 leading-[1.55] md:leading-[1.6]">
                  {t('contact.map_desc')}
                </p>
              </div>
            </div>
            
            <div className="w-full md:w-auto flex flex-col md:flex-row items-center md:gap-[26px] shrink-0">
              {/* Desktop City Badge */}
              <div className="hidden md:flex flex-col items-center">
                <div className="w-5 h-5 rounded-full bg-[#f0a83f] flex items-center justify-center mb-2 relative">
                  <div className="w-2 h-2 rounded-full bg-white dark:bg-[#0a1628]"></div>
                </div>
                <span className="text-[12px] font-bold tracking-[0.1em] text-[#f0a83f]">{t('contact.map_city')}</span>
              </div>
              
              <a data-track="google-maps" href="https://maps.app.goo.gl/PD45bFPqEn6h4Udw9" target="_blank" rel="noreferrer" className="w-full md:w-auto mt-4 md:mt-0 bg-transparent border-[1.5px] border-slate-300 dark:border-white/20 text-slate-700 dark:text-slate-300 rounded-full py-4 md:py-[17px] px-0 md:px-[30px] text-[15px] font-bold flex items-center justify-center gap-2 md:gap-[10px] hover:bg-slate-100 dark:hover:bg-[#0c1d3d] hover:text-slate-900 dark:hover:text-white transition-colors">
                {t('contact.map_btn')}
                <MapPin size={15} strokeWidth={1.6} />
              </a>
            </div>
          </div>

          <div className="w-full h-[450px] md:h-[600px] rounded-[20px] md:rounded-[22px] overflow-hidden border border-slate-200 dark:border-white/10 shadow-sm relative z-0 bg-slate-100 dark:bg-[#051024]">
            <iframe 
              src="https://maps.google.com/maps?q=Alexianergraben+9,+52064+Aachen&t=&z=17&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full dark:invert dark:hue-rotate-180 dark:contrast-90 dark:opacity-80 transition-all"
              title="Google Maps Location"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}
