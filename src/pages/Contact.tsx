import { Mail, Phone, MapPin, Clock, ShieldCheck, LineChart, Handshake, PhoneCall, Zap, ArrowRight, Headset, Flame } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="bg-slate-50 dark:bg-[#051024] min-h-screen font-sans text-slate-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[65vh] lg:min-h-[80vh] flex items-center pt-28 pb-32 overflow-hidden bg-white dark:bg-[#051024] z-10">
        <div className="container mx-auto px-5 md:px-10 max-w-[1240px] relative z-20">
          <div className="md:grid md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:items-center">
            
            {/* Left Header Content */}
            <div className="pt-8 md:pt-0">
              <div className="flex items-center gap-2 text-[11px] md:text-[12px] font-bold tracking-[0.15em] uppercase text-[#f0a83f] mb-4">
                <div className="w-6 h-[2px] bg-[#f0a83f] rounded-sm"></div>
                We are here for you
              </div>
              
              <h1 className="font-heading text-[44px] md:text-[64px] lg:text-[72px] leading-[1.05] font-extrabold text-[#00173A] dark:text-white mb-6 tracking-[-0.02em]">
                Let's connect.<br />
                <span className="text-[#f0a83f]">We'll take care.</span>
              </h1>
              
              <p className="text-[16px] md:text-[18px] leading-[1.6] text-slate-600 dark:text-white/80 max-w-[500px] mb-10 font-medium">
                Have questions or need advice? Our friendly team is ready to help you with anything you need. Reach out and we'll get back to you as soon as possible.
              </p>
              
              {/* Features Row */}
              <div className="flex flex-wrap md:flex-nowrap gap-8 md:gap-12 mb-10">
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#f0f4ff] dark:bg-[#0c1d3d] flex items-center justify-center text-[#0047AB] dark:text-[#60a5fa] border border-[#e2e8f0] dark:border-white/10">
                    <PhoneCall size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#00173A] dark:text-white text-[15px] mb-1">Call Anytime</h4>
                    <p className="text-slate-500 dark:text-white/60 text-[13px]">We're just a call away</p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#f0f4ff] dark:bg-[#0c1d3d] flex items-center justify-center text-[#0047AB] dark:text-[#60a5fa] border border-[#e2e8f0] dark:border-white/10">
                    <Zap size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#00173A] dark:text-white text-[15px] mb-1">Quick Response</h4>
                    <p className="text-slate-500 dark:text-white/60 text-[13px]">Usually within 24h</p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#f0f4ff] dark:bg-[#0c1d3d] flex items-center justify-center text-[#0047AB] dark:text-[#60a5fa] border border-[#e2e8f0] dark:border-white/10">
                    <ShieldCheck size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#00173A] dark:text-white text-[15px] mb-1">Trusted Support</h4>
                    <p className="text-slate-500 dark:text-white/60 text-[13px]">Reliable. Friendly. Local.</p>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <a href="tel:+4917665949390" className="bg-[#0047AB] hover:bg-[#003380] text-white px-8 py-3.5 rounded-full font-bold text-[15px] flex items-center gap-2 transition-colors w-full sm:w-auto justify-center group shadow-md shadow-blue-900/20">
                  <PhoneCall size={18} strokeWidth={2} />
                  Call us now
                  <ArrowRight size={18} strokeWidth={2} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="mailto:info@energie-alemi.de" className="text-[#0047AB] dark:text-[#60a5fa] font-bold text-[15px] hover:text-[#003380] dark:hover:text-white transition-colors border-b-2 border-[#0047AB]/30 dark:border-[#60a5fa]/30 hover:border-[#0047AB] dark:hover:border-[#60a5fa] pb-1">
                  Send us a message
                </a>
              </div>
            </div>
            
            {/* Right Column Graphic */}
            <div className="hidden lg:flex relative h-[500px] items-center justify-center w-full mt-10 md:mt-0">
              {/* Decorative dashed/dotted circles */}
              <div className="absolute w-[450px] h-[450px] rounded-full border-[1.5px] border-dashed border-[#cbd5e1] dark:border-white/10 animate-[spin_120s_linear_infinite]" />
              <div className="absolute w-[320px] h-[320px] rounded-full border-[1.5px] border-dotted border-[#94a3b8] dark:border-white/20 shadow-[inset_0_0_40px_rgba(0,0,0,0.02)]" />
              <div className="absolute w-[220px] h-[220px] rounded-full border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/5 backdrop-blur-sm" />
              
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

      {/* Main Content Area */}
      <section className="bg-slate-50 dark:bg-[#051024] relative z-20 px-5 md:px-10 pt-16 md:pt-24 pb-14 md:pb-[100px] max-w-[1240px] mx-auto">
        <div className="md:grid md:grid-cols-[1.5fr_1fr] md:gap-[32px] items-start">
          <div className="w-full mb-10 md:mb-0">
            <ContactForm />
          </div>
          
          <div className="w-full flex flex-col gap-10 md:gap-[24px]">
            {/* Contact Info Block */}
            <div className="bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-white/10 p-6 md:p-[34px_30px] rounded-[20px] md:rounded-[22px] text-slate-900 dark:text-white shadow-sm relative overflow-hidden">
              <h3 className="font-heading text-[19px] md:text-[21px] font-extrabold mb-4 md:mb-[22px] relative z-10 tracking-[-0.01em]">
                Contact Information
              </h3>
              
              <div className="flex flex-col relative z-10">
                {/* Phone */}
                <div className="flex gap-3.5 md:gap-[16px] items-start py-3.5 md:py-[16px] border-b border-slate-100 md:border-t md:border-b-0 md:first:border-t-0">
                  <div className="w-[42px] h-[42px] md:w-[46px] md:h-[46px] bg-[#f0a83f]/15 rounded-xl md:rounded-[13px] flex items-center justify-center shrink-0">
                    <Phone size={19} strokeWidth={1.5} className="text-[#f0a83f]" />
                  </div>
                  <div>
                    <p className="text-slate-500 dark:text-white/60 text-[11px] md:text-[11.5px] font-bold uppercase tracking-[0.08em] mb-[3px] md:mb-1">Phone</p>
                    <p className="font-semibold text-[15px] md:text-[16px] leading-[1.4]">0176 659 493 90</p>
                  </div>
                </div>
                
                {/* E-Mail */}
                <div className="flex gap-3.5 md:gap-[16px] items-start py-3.5 md:py-[16px] border-b border-slate-100 md:border-t md:border-b-0">
                  <div className="w-[42px] h-[42px] md:w-[46px] md:h-[46px] bg-[#f0a83f]/15 rounded-xl md:rounded-[13px] flex items-center justify-center shrink-0">
                    <Mail size={19} strokeWidth={1.5} className="text-[#f0a83f]" />
                  </div>
                  <div>
                    <p className="text-slate-500 dark:text-white/60 text-[11px] md:text-[11.5px] font-bold uppercase tracking-[0.08em] mb-[3px] md:mb-1">E-Mail</p>
                    <p className="font-semibold text-[15px] md:text-[16px] leading-[1.4]">info@energie-alemi.de</p>
                  </div>
                </div>
                
                {/* Address */}
                <div className="flex gap-3.5 md:gap-[16px] items-start py-3.5 md:py-[16px] border-b border-slate-100 md:border-t md:border-b-0">
                  <div className="w-[42px] h-[42px] md:w-[46px] md:h-[46px] bg-[#f0a83f]/15 rounded-xl md:rounded-[13px] flex items-center justify-center shrink-0">
                    <MapPin size={19} strokeWidth={1.5} className="text-[#f0a83f]" />
                  </div>
                  <div>
                    <p className="text-slate-500 dark:text-white/60 text-[11px] md:text-[11.5px] font-bold uppercase tracking-[0.08em] mb-[3px] md:mb-1">Address</p>
                    <p className="font-semibold text-[15px] md:text-[16px] leading-[1.4]">Alexianergraben 9<br/>52064 Aachen</p>
                  </div>
                </div>
                
                {/* Office Hours */}
                <div className="flex gap-3.5 md:gap-[16px] items-start py-3.5 md:py-[16px] md:border-t md:border-slate-100">
                  <div className="w-[42px] h-[42px] md:w-[46px] md:h-[46px] bg-[#f0a83f]/15 rounded-xl md:rounded-[13px] flex items-center justify-center shrink-0">
                    <Clock size={19} strokeWidth={1.5} className="text-[#f0a83f]" />
                  </div>
                  <div>
                    <p className="text-slate-500 dark:text-white/60 text-[11px] md:text-[11.5px] font-bold uppercase tracking-[0.08em] mb-[3px] md:mb-1">Office Hours</p>
                    <p className="font-semibold text-[15px] md:text-[16px] leading-[1.4]">Mon – Sat: 10:00 – 19:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Why choose us Block */}
            <div className="bg-white dark:bg-[#0a1628] p-6 md:p-[32px_30px] rounded-[20px] md:rounded-[22px] shadow-[0_4px_16px_rgba(10,22,40,0.06)] md:shadow-[0_8px_24px_rgba(10,22,40,0.06)] border border-[#e5e9f0]">
              <h3 className="font-heading text-[19px] md:text-[21px] font-extrabold text-[#101828] mb-4 md:mb-[22px] tracking-[-0.01em]">
                Why choose Energie Alemi?
              </h3>
              
              <div className="flex flex-col">
                {/* Point 1 */}
                <div className="flex gap-3.5 md:gap-[16px] items-start py-4 md:py-[18px] border-b border-[#e5e9f0] md:border-t md:border-b-0 md:first:border-t-0">
                  <div className="w-[42px] h-[42px] md:w-[46px] md:h-[46px] bg-slate-50 dark:bg-[#051024] rounded-xl md:rounded-[13px] flex items-center justify-center text-[#f0a83f] shrink-0 border border-slate-200 dark:border-white/10">
                    <ShieldCheck size={19} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-heading text-[15.5px] md:text-[16px] font-bold text-[#101828] mb-1">Independent & Transparent</h4>
                    <p className="text-[#475467] text-[13.5px] md:text-[14px] leading-[1.55]">We provide neutral advice with 100% transparency.</p>
                  </div>
                </div>
                
                {/* Point 2 */}
                <div className="flex gap-3.5 md:gap-[16px] items-start py-4 md:py-[18px] border-b border-[#e5e9f0] md:border-t md:border-b-0">
                  <div className="w-[42px] h-[42px] md:w-[46px] md:h-[46px] bg-slate-50 dark:bg-[#051024] rounded-xl md:rounded-[13px] flex items-center justify-center text-[#f0a83f] shrink-0 border border-slate-200 dark:border-white/10">
                    <LineChart size={19} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-heading text-[15.5px] md:text-[16px] font-bold text-[#101828] mb-1">Tailored Solutions</h4>
                    <p className="text-[#475467] text-[13.5px] md:text-[14px] leading-[1.55]">We find the best tariffs and contracts that perfectly fit your needs.</p>
                  </div>
                </div>
                
                {/* Point 3 */}
                <div className="flex gap-3.5 md:gap-[16px] items-start py-4 md:py-[18px] md:border-t md:border-[#e5e9f0]">
                  <div className="w-[42px] h-[42px] md:w-[46px] md:h-[46px] bg-slate-50 dark:bg-[#051024] rounded-xl md:rounded-[13px] flex items-center justify-center text-[#f0a83f] shrink-0 border border-slate-200 dark:border-white/10">
                    <Handshake size={19} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-heading text-[15.5px] md:text-[16px] font-bold text-[#101828] mb-1">Personal Support</h4>
                    <p className="text-[#475467] text-[13.5px] md:text-[14px] leading-[1.55]">We're with you every step of the way – reliable and committed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-8 md:pb-[20px] px-5 md:px-10 max-w-[1240px] mx-auto">
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
                Aachen, Germany
              </div>
              <div className="md:hidden w-11 h-11 border-[1.5px] border-[#f0a83f] rounded-full flex items-center justify-center text-[#f0a83f] mb-3.5">
                <MapPin size={20} strokeWidth={1.6} />
              </div>
              
              <h3 className="font-heading text-[19px] md:text-[24px] font-extrabold tracking-[-0.01em] mb-2 md:mb-[8px]">Located in Aachen. Here for you.</h3>
              <p className="text-[13.5px] md:text-[15px] text-slate-600 dark:text-white/80 md:text-slate-600 dark:text-white/80 leading-[1.55] md:leading-[1.6]">
                Visit us in person or get in touch online — we'll help you find the best solution.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-auto flex flex-col md:flex-row items-center md:gap-[26px] shrink-0">
            {/* Desktop City Badge */}
            <div className="hidden md:flex flex-col items-center">
              <div className="w-5 h-5 rounded-full bg-[#f0a83f] flex items-center justify-center mb-2 relative">
                <div className="w-2 h-2 rounded-full bg-white dark:bg-[#0a1628]"></div>
              </div>
              <span className="text-[12px] font-bold tracking-[0.1em] text-[#f0a83f]">AACHEN</span>
            </div>
            
            <button className="w-full md:w-auto mt-4 md:mt-0 bg-transparent border-[1.5px] border-slate-300 dark:border-white/20 text-slate-700 dark:text-slate-300 rounded-full py-4 md:py-[17px] px-0 md:px-[30px] text-[15px] font-bold flex items-center justify-center gap-2 md:gap-[10px] hover:bg-slate-100 dark:hover:bg-[#0c1d3d] hover:text-slate-900 dark:hover:text-white transition-colors">
              View on map
              <MapPin size={15} strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
