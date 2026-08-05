import { Zap, ShieldCheck, Users, LineChart, MessageSquare, ArrowRight, Handshake } from 'lucide-react';
import Button from '../components/ui/Button';
import ownerImg from '../assets/owner.png';

export default function About() {
  return (
    <div className="bg-white dark:bg-[#0a1628] min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[max(100vh,900px)] flex items-center py-20 md:py-32 overflow-hidden bg-slate-50 dark:bg-[#051024]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2560&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-multiply transform-gpu" />
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <div className="w-full lg:w-[55%]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#E5A937]"></div>
              <h3 className="text-[#E5A937] font-heading font-medium tracking-wider uppercase text-sm">
                ABOUT US
              </h3>
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4">
              Energie Alemi
            </h1>
            <p className="text-xl md:text-2xl font-medium text-slate-600 dark:text-white/80 mb-6">
              Professional advice on electricity, gas and internet
            </p>
            <div className="mt-8 flex justify-start">
              <Button variant="primary" icon={<ArrowRight size={18} />} className="w-full md:w-auto justify-center">
                Non-binding consultation
              </Button>
            </div>

            <div className="w-12 h-[3px] bg-[#E5A937] mt-8 mb-8"></div>

            {/* Feature Cards Container */}
            <div className="bg-white dark:bg-[#0a1628] rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-slate-100 p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 relative">
                
                {/* Feature 1 */}
                <div className="flex flex-col items-center text-center px-4 gap-2">
                  <div className="w-14 h-14 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-[#0047AB] shadow-sm bg-white dark:bg-[#0a1628]">
                    <Zap size={24} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-heading text-base font-bold text-slate-900 dark:text-white">Expert Advice</h4>
                  <p className="text-slate-600 dark:text-white/80 text-xs leading-relaxed">Clear and reliable energy guidance</p>
                </div>

                {/* Divider 1 */}
                <div className="hidden md:block absolute left-1/3 top-2 bottom-2 w-px bg-slate-100 dark:bg-[#0c1d3d]"></div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center text-center px-4 gap-2">
                  <div className="w-14 h-14 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-[#0047AB] shadow-sm bg-white dark:bg-[#0a1628]">
                    <ShieldCheck size={24} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-heading text-base font-bold text-slate-900 dark:text-white">Transparent</h4>
                  <p className="text-slate-600 dark:text-white/80 text-xs leading-relaxed">Honest comparisons and clear solutions</p>
                </div>

                {/* Divider 2 */}
                <div className="hidden md:block absolute left-2/3 top-2 bottom-2 w-px bg-slate-100 dark:bg-[#0c1d3d]"></div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center text-center px-4 gap-2">
                  <div className="w-14 h-14 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-[#0047AB] shadow-sm bg-white dark:bg-[#0a1628]">
                    <Handshake size={24} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-heading text-base font-bold text-slate-900 dark:text-white">Customer First</h4>
                  <p className="text-slate-600 dark:text-white/80 text-xs leading-relaxed">Your needs are our priority</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image Right Side */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end items-center relative mt-12 lg:mt-0">
             <div className="relative w-full max-w-lg lg:max-w-none aspect-[4/5] lg:aspect-[3/4] rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/10 z-10">
               <img src="/about-hero-image.png" alt="Energy Consulting" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-[#051024] via-transparent to-transparent opacity-60 pointer-events-none" />
             </div>
             {/* Decorative glow behind image */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#E5A937]/10 rounded-full blur-[100px] z-0 transform-gpu pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Philosophy / Intro Section */}
      <section className="py-20 md:py-32 relative bg-white dark:bg-[#0a1628]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 md:gap-24 items-center">
            
            {/* Left side: Typography & Content */}
            <div className="w-full lg:w-[55%]">
              <h3 className="text-[#0047AB] font-heading font-medium tracking-wider uppercase text-sm mb-4">
                OUR PHILOSOPHY
              </h3>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
                Not tied to providers.<br/>
                <span className="text-slate-400 dark:text-white/50">Committed to your success.</span>
              </h2>
              <div className="space-y-6 text-slate-600 dark:text-white/80 text-lg leading-relaxed">
                <p>
                  As an independent consultancy firm, we are not tied to specific providers. 
                  This independence is the core of our business model and allows us to act entirely in your interest.
                </p>
                <p>
                  Our goal is to make the complex energy and telecommunications market transparent for you. 
                  We analyze your current contracts, uncover savings potential, and develop customized solutions 
                  that perfectly match your consumption patterns.
                </p>
                <p>
                  Through our extensive network and continuous market monitoring, we secure conditions that are often not publicly available.
                </p>
              </div>

              {/* Stats/Badges */}
              <div className="flex flex-wrap gap-8 mt-12 pt-10 border-t border-slate-100">
                <div>
                  <h4 className="font-heading text-4xl font-bold text-[#0047AB] mb-1">100+</h4>
                  <p className="text-sm text-slate-500 dark:text-white/60 font-medium uppercase tracking-wider">Providers Compared</p>
                </div>
                <div>
                  <h4 className="font-heading text-4xl font-bold text-[#0047AB] mb-1">Independent</h4>
                  <p className="text-sm text-slate-500 dark:text-white/60 font-medium uppercase tracking-wider">Consulting</p>
                </div>
                <div>
                  <h4 className="font-heading text-4xl font-bold text-[#0047AB] mb-1">100%</h4>
                  <p className="text-sm text-slate-500 dark:text-white/60 font-medium uppercase tracking-wider">Client Focus</p>
                </div>
              </div>
            </div>

            {/* Right side: Founder / Image */}
            <div className="w-full lg:w-[45%] h-full flex justify-center lg:justify-end items-end relative mt-12 lg:mt-0 pt-16">
              {/* Light Circle Background */}
              <div className="absolute top-1/4 right-0 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] bg-slate-100 dark:bg-[#0c1d3d] rounded-full z-0 translate-x-10 -translate-y-10" />
              
              {/* Cut out person image */}
              <div className="relative z-10 flex items-end justify-center w-full">
                 <img 
                   src={ownerImg} 
                   alt="Shoaib Alemi" 
                   className="w-[85%] max-w-[500px] object-cover transform scale-x-[-1] rounded-3xl"
                 />
               
               {/* Signature Graphic */}
               <div className="absolute bottom-12 -right-4 z-20 transform -rotate-6">
                  <span className="font-serif italic text-4xl text-slate-900 dark:text-white">Shoaib Alemi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-14 md:py-24 bg-white dark:bg-[#0a1628] relative z-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start max-w-7xl mx-auto">
            
            {/* Left Content */}
            <div className="w-full lg:w-[55%]">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
                More than <span className="text-[#E5A937]">7+ years</span> of experience in energy & telecommunications
              </h2>
              <div className="w-full h-px bg-slate-200 dark:bg-white dark:bg-[#0a1628]/10 mb-8" />
              
              <div className="space-y-6 text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                <p>
                  For over seven years, we have been helping companies and individuals find the best solutions for electricity, gas, and internet.
                </p>
                <p>
                  Under the leadership of Shoaib Alemi, our team provides personal, transparent, and reliable advice on a wide range of tariff options. We help businesses and private customers make informed decisions that truly fit their needs.
                </p>
                <p>
                  With deep experience in energy and telecommunications contracts, we explain complex options in a simple and clear way – so you can save costs, reduce risks, and plan with confidence.
                </p>
                <p>
                  Many companies prefer personal consultation over online comparisons. That's why we welcome you at our store in the heart of Aachen or online – whatever is most convenient for you.
                </p>
              </div>

              {/* Blockquote area */}
              <div className="mt-10 bg-slate-50 dark:bg-[#051024] p-6 md:p-8 rounded-2xl flex items-center gap-6 border border-slate-100">
                <div className="w-14 h-14 bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-white/10 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <span className="text-[#0047AB] text-3xl font-serif leading-none mt-1">"</span>
                </div>
                <p className="font-medium text-slate-900 dark:text-white leading-relaxed">
                  Our goal is simple: reliable service, maximum planning security, and the best solution for you.
                </p>
              </div>
            </div>
            
            {/* Right Features Column */}
            <div className="w-full lg:w-[45%]">
              <div className="bg-white dark:bg-[#0a1628] p-8 md:p-12 rounded-3xl border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)] flex flex-col gap-8">
                
                {/* Feature 1 */}
                <div className="flex gap-6 pb-8 border-b border-slate-100 relative">
                  <div className="absolute left-0 top-2 bottom-8 w-[3px] bg-[#E5A937] rounded-full" />
                  <div className="w-14 h-14 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-[#0047AB] shrink-0 ml-6 bg-slate-50 dark:bg-[#051024]">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-1">Independency</h4>
                    <p className="text-slate-600 dark:text-white/80 text-sm leading-relaxed">We work independently and recommend what's best for you.</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-6 pb-8 border-b border-slate-100 relative">
                  <div className="absolute left-0 top-2 bottom-8 w-[3px] bg-[#E5A937] rounded-full" />
                  <div className="w-14 h-14 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-[#0047AB] shrink-0 ml-6 bg-slate-50 dark:bg-[#051024]">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-1">Transparency</h4>
                    <p className="text-slate-600 dark:text-white/80 text-sm leading-relaxed">We compare tariffs clearly so you can make informed decisions.</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-6 pb-8 border-b border-slate-100 relative">
                  <div className="absolute left-0 top-2 bottom-8 w-[3px] bg-[#E5A937] rounded-full" />
                  <div className="w-14 h-14 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-[#0047AB] shrink-0 ml-6 bg-slate-50 dark:bg-[#051024]">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-1">Personal Consultation</h4>
                    <p className="text-slate-600 dark:text-white/80 text-sm leading-relaxed">We take the time to understand your requirements and goals.</p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex gap-6 relative">
                  <div className="absolute left-0 top-2 bottom-2 w-[3px] bg-[#E5A937] rounded-full" />
                  <div className="w-14 h-14 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-[#0047AB] shrink-0 ml-6 bg-slate-50 dark:bg-[#051024]">
                    <LineChart size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-1">Reliable Support</h4>
                    <p className="text-slate-600 dark:text-white/80 text-sm leading-relaxed">We're here for you – before, during, and after your decision.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-14 md:py-16 bg-white dark:bg-[#0a1628] relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="relative overflow-hidden bg-white dark:bg-[#0a1628] rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-200 dark:border-white/10 shadow-sm">
            {/* Background graphic */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-multiply" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 w-full">
              <div className="w-24 h-24 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#051024] flex items-center justify-center text-[#0047AB] shrink-0 mt-1 shadow-sm">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  <line x1="9" y1="9" x2="15" y2="9"></line>
                  <line x1="9" y1="13" x2="15" y2="13"></line>
                </svg>
              </div>
              <div className="text-center md:text-left flex-grow">
                <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  Questions or need support?
                </h3>
                <p className="text-slate-600 dark:text-white/80 text-base max-w-lg">
                  We're happy to help you with customized solutions for your electricity, gas, and internet contracts.
                </p>
              </div>
              <div className="flex-shrink-0 mt-4 md:mt-2 w-full md:w-auto">
                <Button variant="primary" className="w-full md:w-auto justify-center" icon={<ArrowRight size={18} />}>
                  Non-binding consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
