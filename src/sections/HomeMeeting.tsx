import { MapPin, Phone, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

export default function HomeMeeting() {
  return (
    <section className="py-14 md:py-24 bg-slate-50 dark:bg-[#051024] border-t border-slate-200 dark:border-white/10">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
          <h3 className="text-[#0047AB] font-heading font-medium tracking-wider uppercase text-sm mb-2">
            HOW WE MEET YOU
          </h3>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            We're here – however it suits you best.
          </h2>
          <div className="w-16 h-[3px] bg-[#0047AB]"></div>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
          
          {/* Card 1 */}
          <div className="w-full lg:w-1/2 bg-white dark:bg-[#0a1628] rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col">
            <div className="relative h-64 w-full">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop" 
                alt="Storefront" 
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-6 left-8 w-14 h-14 bg-[#0047AB] rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white">
                <MapPin size={24} />
              </div>
            </div>
            <div className="p-8 pt-10 flex flex-col flex-grow">
              <h4 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-3">Visit us in person</h4>
              <p className="text-slate-600 dark:text-white/80 mb-6 leading-relaxed flex-grow">
                We are available for you from Monday to Saturday, 10 am to 7 pm. You can find our shop in the center of Aachen at Alexianergraben 9, 52064 Aachen.
              </p>
              <a href="#" className="text-[#0047AB] font-medium flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors">
                Get directions <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full lg:w-1/2 bg-white dark:bg-[#0a1628] rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col">
            <div className="relative h-64 w-full">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop" 
                alt="Consultation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-6 left-8 w-14 h-14 bg-[#0047AB] rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white">
                <Phone size={24} />
              </div>
            </div>
            <div className="p-8 pt-10 flex flex-col flex-grow">
              <h4 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-3">Direct consultation – on-site, by phone or online</h4>
              <p className="text-slate-600 dark:text-white/80 mb-6 leading-relaxed flex-grow">
                We analyze your current contract and compare it with hundreds of tariffs from different providers.
              </p>
              <a href="#" className="text-[#0047AB] font-medium flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors">
                Book a consultation <ArrowRight size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Action Button */}
        <div className="flex justify-center mt-10">
          <Button variant="primary" className="bg-slate-900 dark:bg-white hover:bg-[#0047AB] text-white px-8" icon={<ArrowRight size={18} />}>
            Non-binding consultation
          </Button>
        </div>

      </div>
    </section>
  );
}
