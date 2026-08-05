import { Search, Handshake, ArrowLeftRight, Leaf, Calendar, BarChart3, CheckSquare, Truck, ArrowRight } from 'lucide-react';
import ServiceHero from '../sections/ServiceHero';
import ServiceFeatures from '../sections/ServiceFeatures';
import SectionHeader from '../components/ui/SectionHeader';
import Timeline from '../components/ui/Timeline';
import FAQ from '../components/ui/FAQ';
import Button from '../components/ui/Button';

export default function Gas() {
  const features = [
    {
      icon: <Search size={28} strokeWidth={1.5} />,
      title: "Compare gas tariffs",
      description: "We compare numerous gas tariffs from various providers and show you suitable options for your company."
    },
    {
      icon: <Handshake size={28} strokeWidth={1.5} />,
      title: "Advice on gas contracts",
      description: "We will explain contract durations, price guarantees and other important tariff details in a way that is easy to understand."
    },
    {
      icon: <ArrowLeftRight size={28} strokeWidth={1.5} />,
      title: "Switching providers",
      description: "If you decide to switch to a new gas tariff, we will accompany you during the transition and support you in all steps."
    },
    {
      icon: <Leaf size={28} strokeWidth={1.5} />,
      title: "Sustainability",
      description: "Upon request, we can also inform you about alternative or sustainable energy solutions for your company."
    }
  ];

  const steps = [
    {
      number: 1,
      icon: <Calendar size={24} />,
      title: "Schedule a consultation appointment",
      description: "The first step to finding the right gas tariff is a personal consultation. You can visit us anytime at our shop in the center of Aachen or contact us online. In a non-obligation consultation, we'll take the time to answer your questions and inform you about your options."
    },
    {
      number: 2,
      icon: <BarChart3 size={24} />,
      title: "Compare gas tariffs",
      description: "Based on the information you provide, we compare a wide range of gas tariffs from various providers. We pay close attention to important factors such as price, contract duration, price guarantee, and other tariff conditions."
    },
    {
      number: 3,
      icon: <CheckSquare size={24} />,
      title: "Make decision",
      description: "After presenting you with various tariff options, you can take your time to decide which gas tariff best suits your business. We will explain all the important contract details and answer your questions so you can make an informed decision."
    },
    {
      number: 4,
      icon: <Truck size={24} />,
      title: "Switch providers",
      description: "Once you've chosen a new gas tariff, we'll support you throughout the entire switching process. In most cases, the new supplier will handle the cancellation of your existing contract and organize the switch. This means no extra work for you, and your gas supply will, of course, remain uninterrupted at all times."
    }
  ];

  const faqs = [
    {
      question: "Is switching gas tariffs complicated for businesses?",
      answer: "No. The new provider usually handles the organizational steps for the switch."
    },
    {
      question: "Will there be an interruption in the gas supply?",
      answer: "No. Your gas supply remains secure at all times."
    },
    {
      question: "How long does it take to switch providers?",
      answer: "The switch usually takes place within a few weeks and is implemented automatically by the new provider."
    }
  ];

  return (
    <div>
      <ServiceHero 
        titleLine1="Smart energy decisions."
        titleLine2="Lower costs."
        description="We compare gas tariffs and help you reduce your energy costs – in person in Aachen or conveniently online."
        glowColor="bg-blue-500/10"
        graphic={
          <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full border-[3px] border-blue-400/50 shadow-[0_0_50px_rgba(59,130,246,0.3)] flex items-center justify-center relative backdrop-blur-sm">
            <div className="absolute inset-2 border border-blue-300/30 rounded-full" />
            <div className="text-blue-400">
              <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2c0 0-4.5 4.5-4.5 9a4.5 4.5 0 0 0 9 0c0-4.5-4.5-9-4.5-9z" />
                <path d="M12 11c0 0-1.5 1.5-1.5 3a1.5 1.5 0 0 0 3 0c0-1.5-1.5-3-1.5-3z" />
              </svg>
            </div>
          </div>
        }
      />
      <ServiceFeatures features={features} />
      
      {/* Timeline Section */}
      <section className="py-24 bg-slate-50 dark:bg-[#051024]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <SectionHeader 
                  title={
                    <>
                      In 4 simple steps to the right <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">gas tariff</span>
                    </>
                  }
                  subtitle="HOW WE WORK"
                  align="left"
                  className="mb-8"
                />
                <p className="text-slate-600 dark:text-white/80 text-lg leading-relaxed">
                  We make the entire process transparent, simple and efficient so you can focus on what really matters: your business.
                </p>
                {/* Windmill graphic placeholder */}
                <div className="mt-12 opacity-50 flex flex-col items-center">
                  <svg width="100%" height="200" viewBox="0 0 200 100" fill="none" stroke="#94a3b8" strokeWidth="1" className="mb-4">
                    <path d="M20 90 L20 40 L40 40 L40 90 Z" />
                    <circle cx="30" cy="40" r="15" />
                    <path d="M80 90 L80 20 L110 20 L110 90 Z" />
                    <rect x="85" y="30" width="8" height="8" />
                    <rect x="97" y="30" width="8" height="8" />
                    <rect x="85" y="45" width="8" height="8" />
                    <rect x="97" y="45" width="8" height="8" />
                    <path d="M150 90 L150 50 L180 50 L180 90 Z" />
                    <path d="M165 50 L165 20 M150 35 L180 35" />
                  </svg>
                  <p className="text-slate-600 dark:text-white/80 text-sm font-medium">Sustainable energy solutions</p>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3">
              <Timeline steps={steps} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
