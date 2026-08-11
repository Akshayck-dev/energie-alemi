import HomeHero from '../sections/HomeHero';
import HomeFeatures from '../sections/HomeFeatures';
import HomeServices from '../sections/HomeServices';
import HomeProcess from '../sections/HomeProcess';
import HomePromise from '../sections/HomePromise';
import SEO from "../components/SEO";

export default function Home() {
  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO title="Tarifberatung Strom Gas Internet Aachen - Energie Alemi" description="Ihre lokale Tarifberatung in Aachen. Vergleichen Sie Strom, Gas und Internet Tarife kostenlos und sparen Sie bares Geld." url="/" />
      {/* Hero is sticky on mobile so the rest of the page slides over it */}
      <div className="sticky top-0 z-0 md:relative">
        <HomeHero />
      </div>
      
      {/* Features slides over Hero */}
      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.5)] md:shadow-none">
        <HomeFeatures />
      </div>
      
      {/* Services slides over Features */}
      <div className="relative z-20 bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.3)] md:shadow-none">
        <HomeServices />
      </div>

      {/* Process section slides over Services */}
      <div className="relative z-30 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.3)] md:shadow-none">
        <HomeProcess />
      </div>

      {/* Promise slides over Process */}
      <div className="relative z-40 bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.3)] md:shadow-none">
        <HomePromise />
      </div>
    </div>
  );
}
