import { useEffect } from 'react';
import HomeHero from '../sections/HomeHero';
import HomeFeatures from '../sections/HomeFeatures';
import TarifberatungServices from '../sections/TarifberatungServices';
import TarifberatungProcess from '../sections/TarifberatungProcess';
import TarifberatungPromise from '../sections/TarifberatungPromise';
import SEO from "../components/SEO";

export default function Tarifberatung() {
  // Ensure we start at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO url="/tarifberatung-aachen" />
      {/* Hero is sticky on mobile so the rest of the page slides over it */}
      <div className="sticky top-0 z-0 md:relative">
        <HomeHero />
      </div>
      
      {/* Features slides over Hero */}
      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <HomeFeatures />
      </div>
      
      {/* Services slides over Features */}
      <div className="relative z-20 bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <TarifberatungServices />
      </div>

      {/* Process section slides over Services */}
      <div className="relative z-30 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <TarifberatungProcess />
      </div>

      {/* Promise slides over Process */}
      <div className="relative z-40 bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <TarifberatungPromise />
      </div>
    </div>
  );
}
