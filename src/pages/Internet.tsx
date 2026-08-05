import { Search, Handshake, ArrowLeftRight, Wifi, Calendar, BarChart3, CheckSquare, Settings, ArrowRight } from 'lucide-react';
import ServiceHero from '../sections/ServiceHero';
import ServiceFeatures from '../sections/ServiceFeatures';
import SectionHeader from '../components/ui/SectionHeader';
import Timeline from '../components/ui/Timeline';
import FAQ from '../components/ui/FAQ';
import Button from '../components/ui/Button';

export default function Internet() {
  const features = [
    {
      icon: <Search size={28} strokeWidth={1.5} />,
      title: "Tariff comparisons",
      description: "We compare numerous tariffs from different providers and show you suitable options for your company."
    },
    {
      icon: <Handshake size={28} strokeWidth={1.5} />,
      title: "Advice on internet contracts",
      description: "We will explain the differences between DSL, cable internet and fiber optics in an easy-to-understand way."
    },
    {
      icon: <ArrowLeftRight size={28} strokeWidth={1.5} />,
      title: "Switching providers",
      description: "If you decide to sign up for a new internet contract, we will assist you with the switchover and answer any questions."
    },
    {
      icon: <Wifi size={28} strokeWidth={1.5} />,
      title: "Connection options",
      description: "Depending on your location, different technologies may be available. We will work together to determine which solution is suitable."
    }
  ];

  const steps = [
    {
      number: 1,
      icon: <Calendar size={24} />,
      title: "Schedule a consultation appointment",
      description: "The first step to finding the right internet contract is a personal consultation. You can visit us directly at our store in the center of Aachen or contact us online. In a non-obligation consultation, we'll discuss your current internet situation and your requirements."
    },
    {
      number: 2,
      icon: <BarChart3 size={24} />,
      title: "Compare internet plans",
      description: "Based on your information, we compare various internet and DSL plans from different providers. We consider important factors such as speed, contract duration, price, and available connection types at your location."
    },
    {
      number: 3,
      icon: <CheckSquare size={24} />,
      title: "Make decision",
      description: "After we've presented you with suitable tariff options, you can take your time to decide which plan best fits your needs. We'll explain all contract details and answer your questions so you can make a well-informed decision."
    },
    {
      number: 4,
      icon: <Settings size={24} />,
      title: "Switch providers",
      description: "Once you've chosen a new internet plan, we'll support you throughout the entire switching process. In many cases, the new provider will handle the cancellation of your existing contract and organize the transfer of your connection."
    }
  ];

  const faqs = [
    {
      question: "Is switching providers complicated?",
      answer: "No. The new provider usually handles the organizational steps."
    },
    {
      question: "Will there be an internet outage?",
      answer: "The changeover is organized in such a way that the interruption remains as short as possible."
    },
    {
      question: "What internet speed do I need?",
      answer: "That depends on how it will be used in your household. We'd be happy to advise you on suitable options."
    }
  ];

  return (
    <div>
      <ServiceHero 
        titleLine1="Compare internet plans"
        titleLine2="and find the right connection"
        description="Many companies are still using internet contracts that no longer meet their needs. We can help you find the right internet or DSL plan – in person in Aachen or conveniently online."
        glowColor="bg-cyan-500/10"
        graphic={
          <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full border-[3px] border-cyan-400/50 shadow-[0_0_50px_rgba(34,211,238,0.3)] flex items-center justify-center relative backdrop-blur-sm">
            <div className="absolute inset-2 border border-cyan-300/30 rounded-full" />
            <div className="text-cyan-400">
              <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                <line x1="12" y1="20" x2="12.01" y2="20" />
              </svg>
            </div>
          </div>
        }
        rating={false}
      />
      
      <ServiceFeatures features={features} />
      
      <section className="py-24 bg-slate-50 dark:bg-[#051024]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <SectionHeader 
                  title={
                    <>
                      In 4 simple steps to the right <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">internet plan</span>
                    </>
                  }
                  subtitle="HOW IT WORKS"
                  align="left"
                  className="mb-8"
                />
                <p className="text-slate-600 dark:text-white/80 text-lg leading-relaxed">
                  Our process is transparent, efficient and designed to get you the best internet solution with minimal effort.
                </p>
                {/* Router graphic placeholder */}
                <div className="mt-12 opacity-80 flex flex-col items-center">
                  <div className="w-48 h-32 bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-white/10 shadow-sm rounded-xl flex items-center justify-center relative shadow-xl mb-4">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-4">
                      <div className="w-1 h-8 bg-slate-300 dark:bg-white dark:bg-[#0a1628]/20 rounded-full"></div>
                      <div className="w-1 h-8 bg-slate-300 dark:bg-white dark:bg-[#0a1628]/20 rounded-full"></div>
                    </div>
                    <Wifi size={48} className="text-cyan-400" />
                  </div>
                  <p className="text-slate-600 dark:text-white/80 text-sm font-medium">Fast and reliable connections</p>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3">
              <Timeline steps={steps} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-[#0a1628]">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeader 
            title="Frequently asked questions"
            subtitle="FAQ"
            align="center"
            className="mb-12"
          />
          <FAQ items={faqs} className="mb-12" />
          <div className="text-center">
            <Button variant="primary" icon={<ArrowRight size={18} />}>
              Non-binding consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
