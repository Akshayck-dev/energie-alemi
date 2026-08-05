import { Search, Handshake, ArrowLeftRight, Leaf, Calendar, BarChart3, CheckSquare, Zap, ArrowRight } from 'lucide-react';
import ServiceHero from '../sections/ServiceHero';
import ServiceFeatures from '../sections/ServiceFeatures';
import SectionHeader from '../components/ui/SectionHeader';
import Timeline from '../components/ui/Timeline';
import FAQ from '../components/ui/FAQ';
import Button from '../components/ui/Button';

export default function Electricity() {
  const features = [
    {
      icon: <Search size={28} strokeWidth={1.5} />,
      title: "Compare electricity tariffs",
      description: "We compare numerous electricity tariffs from various providers and show you suitable options for your company."
    },
    {
      icon: <Handshake size={28} strokeWidth={1.5} />,
      title: "Advice on electricity contracts",
      description: "We will explain contract durations, price guarantees and other important tariff details in a way that is easy to understand."
    },
    {
      icon: <ArrowLeftRight size={28} strokeWidth={1.5} />,
      title: "Switching providers",
      description: "If you decide to switch to a new electricity tariff, we will accompany you during the transition and support you in all steps."
    },
    {
      icon: <Leaf size={28} strokeWidth={1.5} />,
      title: "Green Electricity",
      description: "Upon request, we can inform you about certified green electricity solutions for a sustainable energy footprint."
    }
  ];

  const steps = [
    {
      number: 1,
      icon: <Calendar size={24} />,
      title: "Schedule a consultation appointment",
      description: "The first step to finding the right electricity tariff is a personal consultation. You can visit us anytime at our shop in the center of Aachen or contact us online."
    },
    {
      number: 2,
      icon: <BarChart3 size={24} />,
      title: "Compare electricity tariffs",
      description: "Based on the information you provide, we compare a wide range of electricity tariffs from various providers. We pay close attention to important factors such as price and contract duration."
    },
    {
      number: 3,
      icon: <CheckSquare size={24} />,
      title: "Make decision",
      description: "After presenting you with various tariff options, you can take your time to decide which electricity tariff best suits your business."
    },
    {
      number: 4,
      icon: <Zap size={24} />,
      title: "Switch providers",
      description: "Once you've chosen a new electricity tariff, we'll support you throughout the entire switching process without any interruption to your power supply."
    }
  ];

  const faqs = [
    {
      question: "Is switching electricity tariffs complicated for businesses?",
      answer: "No. The new provider usually handles the organizational steps for the switch."
    },
    {
      question: "Will there be an interruption in the electricity supply?",
      answer: "No. Your power supply remains secure at all times. There is no risk of blackout."
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
        description="We compare electricity tariffs and help you reduce your energy costs – in person in Aachen or conveniently online."
        glowColor="bg-yellow-500/10"
        graphic={
          <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full border-[3px] border-yellow-400/50 shadow-[0_0_50px_rgba(234,179,8,0.3)] flex items-center justify-center relative backdrop-blur-sm">
            <div className="absolute inset-2 border border-yellow-300/30 rounded-full" />
            <div className="text-yellow-400">
              <Zap size={80} strokeWidth={1} />
            </div>
          </div>
        }
      />
      <ServiceFeatures features={features} />
      
      {/* Timeline Section */}
      <section className="py-14 md:py-24 bg-slate-50 dark:bg-[#051024]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <SectionHeader 
                  title={
                    <>
                      In 4 simple steps to the right <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">electricity tariff</span>
                    </>
                  }
                  subtitle="HOW WE WORK"
                  align="left"
                  className="mb-8"
                />
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                  We make the entire process transparent, simple and efficient so you can focus on what really matters: your business.
                </p>
              </div>
            </div>
            <div className="lg:w-2/3">
              <Timeline steps={steps} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-14 md:py-24 bg-white dark:bg-[#0a1628]">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeader 
            title="Frequently asked questions"
            subtitle="FAQ"
            align="center"
            className="mb-12"
          />
          <FAQ items={faqs} className="mb-12" />
          <div className="text-center">
            <Button variant="primary" icon={<ArrowRight size={18} />} className="w-full sm:w-auto justify-center">
              Non-binding consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
