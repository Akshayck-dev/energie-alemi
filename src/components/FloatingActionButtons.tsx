import { Mail, PhoneCall } from 'lucide-react';

export default function FloatingActionButtons() {
  const whatsappUrl = "https://wa.me/4917665949390?text=Hello%20Energie%20Alemi,%20I%20am%20interested%20in%20your%20services.";
  const mailUrl = "mailto:info@energie-alemi.de?subject=Inquiry&body=Hello%20Energie%20Alemi,%0A%0AI%20am%20interested%20in%20your%20services.";
  const phoneUrl = "tel:+4917665949390";

  return (
    <div className="fixed bottom-5 right-4 z-[100] flex flex-col gap-3">

      {/* Mail Button */}
      <div className="relative flex items-center justify-center group">
        <div className="absolute inset-0 bg-[#0047AB] dark:bg-[#60a5fa] rounded-full animate-ping opacity-20 [animation-duration:3s]" />
        <a
          href={mailUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-11 h-11 md:w-12 md:h-12 bg-[#0047AB] dark:bg-[#60a5fa] hover:bg-[#003380] dark:hover:bg-[#3b82f6] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 z-10"
          aria-label="Send us an email"
        >
          <Mail size={20} strokeWidth={2} />
          <div className="absolute right-full mr-3.5 bg-white dark:bg-[#0a1628] border border-slate-150 dark:border-white/10 p-2.5 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 flex flex-col items-start min-w-[150px]">
            <span className="text-[#0047AB] dark:text-[#60a5fa] text-[9px] font-bold tracking-wider uppercase mb-0.5">
              EMAIL US
            </span>
            <span className="text-slate-800 dark:text-white text-xs font-bold tracking-tight">
              info@energie-alemi.de
            </span>
            <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white dark:bg-[#0a1628] border-r border-t border-slate-150 dark:border-white/10 rotate-45 z-10" />
          </div>
        </a>
      </div>

      {/* WhatsApp Button */}
      <div className="relative flex items-center justify-center group">
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25 [animation-duration:2.5s]" />
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-11 h-11 md:w-12 md:h-12 bg-[#25D366] hover:bg-[#1EBE5A] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 z-10"
          aria-label="Chat on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          <div className="absolute right-full mr-3.5 bg-white dark:bg-[#0a1628] border border-slate-150 dark:border-white/10 p-2.5 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 flex flex-col items-start min-w-[150px]">
            <span className="text-[#25D366] text-[9px] font-bold tracking-wider uppercase mb-0.5">
              WHATSAPP US
            </span>
            <span className="text-slate-800 dark:text-white text-xs font-bold tracking-tight">
              +49 176 65949390
            </span>
            <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white dark:bg-[#0a1628] border-r border-t border-slate-150 dark:border-white/10 rotate-45 z-10" />
          </div>
        </a>
      </div>

      {/* Call Button */}
      <div className="relative flex items-center justify-center group">
        <div className="absolute inset-0 bg-[#E31E24] rounded-full animate-ping opacity-20 [animation-duration:3s]" />
        <a
          href={phoneUrl}
          className="relative w-11 h-11 md:w-12 md:h-12 bg-[#E31E24] hover:bg-[#C2181E] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 z-10"
          aria-label="Call us now"
        >
          <PhoneCall size={20} strokeWidth={2} />
          <div className="absolute right-full mr-3.5 bg-white dark:bg-[#0a1628] border border-slate-150 dark:border-white/10 p-2.5 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 flex flex-col items-start min-w-[150px]">
            <span className="text-[#E31E24] text-[9px] font-bold tracking-wider uppercase mb-0.5">
              CALL US NOW
            </span>
            <span className="text-slate-800 dark:text-white text-xs font-bold tracking-tight">
              +49 176 65949390
            </span>
            <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white dark:bg-[#0a1628] border-r border-t border-slate-150 dark:border-white/10 rotate-45 z-10" />
          </div>
        </a>
      </div>

    </div>
  );
}
