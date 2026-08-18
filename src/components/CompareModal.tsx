import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { cn } from '../lib/utils';

interface CompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function CompareModal({ isOpen, onClose, defaultService }: CompareModalProps) {
  const { t, i18n } = useTranslation();
  const headingText = t('compare_modal.title', 'Reach out to us');
  const [name, setName] = useState('');
  const [service, setService] = useState(defaultService || 'Strom');
  const [serviceType, setServiceType] = useState('private');
  const [phone, setPhone] = useState('');
  const [plz, setPlz] = useState('');
  const [address, setAddress] = useState('');
  const [details, setDetails] = useState('');
  const [mounted, setMounted] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Handle body scroll lock, escape key, and focus trap
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
      return;
    }

    // Lock body scroll
    document.body.style.overflow = 'hidden';

    // Focus first input after animation
    const timer = setTimeout(() => {
      firstInputRef.current?.focus();
    }, 100);

    // Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !plz) return;

    const messageText = t('compare_modal.whatsapp_template', `Hallo Energie Alemi,\n\nIch interessiere mich für einen Tarifvergleich. Hier sind meine Angaben:\n\n👤 Name: {{name}}\n🔌 Bereich: {{service}}\n🏢 Service-Typ: {{serviceType}}\n📍 PLZ: {{plz}}\n🏠 Adresse: {{address}}\n📞 Telefon: {{phone}}\n📝 Details/Verbrauch: {{details}}\n\nBitte kontaktieren Sie mich bezüglich passender Angebote.`, {
      name,
      service,
      serviceType: t(`compare_modal.service_type_${serviceType}`, serviceType),
      plz,
      address: address || t('compare_modal.no_address', 'Keine Angabe'),
      phone,
      details: details || t('compare_modal.no_details', 'Keine Angabe')
    });

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/4917665949390?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Reset form and close
    setName('');
    setService('Strom');
    setServiceType('private');
    setPhone('');
    setPlz('');
    setAddress('');
    setDetails('');
    onClose();
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex justify-center items-center p-3 sm:p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-[calc(100vw-24px)] max-w-[560px] max-h-[calc(100dvh-24px)] flex flex-col bg-white dark:bg-[#0a1628] rounded-[1.5rem] border border-slate-100 dark:border-white/10 shadow-2xl z-10 overflow-hidden"
          >
            {/* Sticky Header */}
            <div className="px-5 pt-5 pb-4 sm:px-6 sm:pt-6 sm:pb-4 border-b border-slate-100 dark:border-white/10 shrink-0 bg-white dark:bg-[#0a1628]">
              {/* Close Button */}
              <button
                onClick={onClose}
                className={cn(
                  "absolute top-4 sm:top-5 w-11 h-11 flex items-center justify-center text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors group",
                  i18n.dir() === 'rtl' ? "left-4 sm:left-5" : "right-4 sm:right-5"
                )}
                aria-label="Schließen"
              >
                <div className="w-8 h-8 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:bg-slate-100 dark:group-hover:bg-white/10 transition-colors">
                  <X size={16} />
                </div>
              </button>

              <div className={cn("mb-0", i18n.dir() === 'rtl' ? "pl-12" : "pr-12")}>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0047AB]/10 text-[#0047AB] dark:bg-[#4F8CFF]/15 dark:text-[#4F8CFF] text-[10px] font-semibold uppercase tracking-wider mb-2">
                  <Send size={10} /> {t('compare_modal.inquiry_badge', 'Tarifanfrage')}
                </span>
                <h3 id="modal-title" className="font-heading text-xl font-bold text-slate-900 dark:text-white leading-tight">
                  {headingText}
                </h3>
                <p id="modal-desc" className="text-xs text-slate-500 dark:text-white/60 mt-1 leading-relaxed">
                  {t('compare_modal.subhead', 'Geben Sie Ihre Details ein. Die Daten werden formatiert und direkt per WhatsApp an uns übertragen.')}
                </p>
              </div>
            </div>

            {/* Scrollable Form Body */}
            <div className="p-5 sm:p-6 overflow-y-auto overscroll-contain flex-1">
              <form id="compare-form" onSubmit={handleSubmit} className="flex flex-col gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-500 dark:text-white/60 uppercase tracking-wider mb-1.5 break-words">
                    {t('compare_modal.name_label', 'Name *')}
                  </label>
                  <input
                    ref={firstInputRef}
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t('compare_modal.name_placeholder', 'Ihr Vor- und Nachname')}
                    className="w-full px-3.5 sm:px-4 h-11 sm:h-12 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#051024] text-slate-900 dark:text-white focus:outline-none focus:border-[#0047AB] dark:focus:border-[#4F8CFF] focus:ring-1 focus:ring-[#0047AB] dark:focus:ring-[#4F8CFF] transition-all text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div className="min-w-0">
                    <label className="block text-[11px] sm:text-xs font-bold text-slate-500 dark:text-white/60 uppercase tracking-wider mb-1.5 break-words">
                      {t('compare_modal.service_label', 'Bereich (Sparte) *')}
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 sm:px-4 h-11 sm:h-12 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#051024] text-slate-900 dark:text-white focus:outline-none focus:border-[#0047AB] dark:focus:border-[#4F8CFF] focus:ring-1 focus:ring-[#0047AB] dark:focus:ring-[#4F8CFF] transition-all text-sm"
                    >
                      <option value="Strom">{t('compare_modal.service_elec', 'Strom')}</option>
                      <option value="Gas">{t('compare_modal.service_gas', 'Gas')}</option>
                      <option value="Internet">{t('compare_modal.service_internet', 'Internet')}</option>
                    </select>
                  </div>

                  <div className="min-w-0">
                    <label className="block text-[11px] sm:text-xs font-bold text-slate-500 dark:text-white/60 uppercase tracking-wider mb-1.5 break-words">
                      {t('compare_modal.service_type_label', 'Service-Typ *')}
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full px-3.5 sm:px-4 h-11 sm:h-12 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#051024] text-slate-900 dark:text-white focus:outline-none focus:border-[#0047AB] dark:focus:border-[#4F8CFF] focus:ring-1 focus:ring-[#0047AB] dark:focus:ring-[#4F8CFF] transition-all text-sm"
                    >
                      <option value="private">{t('compare_modal.service_type_private', 'Private')}</option>
                      <option value="business">{t('compare_modal.service_type_business', 'Business')}</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div className="min-w-0">
                    <label className="block text-[11px] sm:text-xs font-bold text-slate-500 dark:text-white/60 uppercase tracking-wider mb-1.5 break-words">
                      {t('compare_modal.plz_label', 'Postleitzahl (PLZ) *')}
                    </label>
                    <input
                      type="text"
                      required
                      inputMode="numeric"
                      autoComplete="postal-code"
                      pattern="[0-9]{5}"
                      maxLength={5}
                      value={plz}
                      onChange={(e) => setPlz(e.target.value.replace(/[^0-9]/g, ''))}
                      placeholder={t('compare_modal.plz_placeholder', 'z.B. 52062')}
                      className="w-full px-3.5 sm:px-4 h-11 sm:h-12 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#051024] text-slate-900 dark:text-white focus:outline-none focus:border-[#0047AB] dark:focus:border-[#4F8CFF] focus:ring-1 focus:ring-[#0047AB] dark:focus:ring-[#4F8CFF] transition-all text-sm"
                    />
                  </div>

                  <div className="min-w-0">
                    <label className="block text-[11px] sm:text-xs font-bold text-slate-500 dark:text-white/60 uppercase tracking-wider mb-1.5 break-words">
                      {t('compare_modal.phone_label', 'Telefon / WhatsApp *')}
                    </label>
                    <input
                      type="tel"
                      required
                      inputMode="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t('compare_modal.phone_placeholder', 'Für Rückfragen')}
                      className="w-full px-3.5 sm:px-4 h-11 sm:h-12 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#051024] text-slate-900 dark:text-white focus:outline-none focus:border-[#0047AB] dark:focus:border-[#4F8CFF] focus:ring-1 focus:ring-[#0047AB] dark:focus:ring-[#4F8CFF] transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-500 dark:text-white/60 uppercase tracking-wider mb-1.5 break-words">
                    {t('compare_modal.address_label', 'Adresse (optional)')}
                  </label>
                  <input
                    type="text"
                    autoComplete="street-address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder={t('compare_modal.address_placeholder', 'Straße, Hausnummer, Ort')}
                    className="w-full px-3.5 sm:px-4 h-11 sm:h-12 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#051024] text-slate-900 dark:text-white focus:outline-none focus:border-[#0047AB] dark:focus:border-[#4F8CFF] focus:ring-1 focus:ring-[#0047AB] dark:focus:ring-[#4F8CFF] transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-500 dark:text-white/60 uppercase tracking-wider mb-1.5 break-words">
                    {t('compare_modal.details_label', 'Verbrauch / Details (optional)')}
                  </label>
                  <input
                    type="text"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder={t('compare_modal.details_placeholder', 'z.B. 3500 kWh/Jahr')}
                    className="w-full px-3.5 sm:px-4 h-11 sm:h-12 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#051024] text-slate-900 dark:text-white focus:outline-none focus:border-[#0047AB] dark:focus:border-[#4F8CFF] focus:ring-1 focus:ring-[#0047AB] dark:focus:ring-[#4F8CFF] transition-all text-sm"
                  />
                </div>
              </form>
            </div>

            {/* Sticky Footer */}
            <div className="p-4 sm:p-6 border-t border-slate-100 dark:border-white/10 shrink-0 bg-slate-50 dark:bg-[#051024]">
              <button
                form="compare-form"
                type="submit"
                className="w-full h-12 sm:h-14 px-6 rounded-xl font-bold bg-[#25D366] hover:bg-[#1EBE5A] text-white flex items-center justify-center gap-2.5 transition-transform hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-green-600/10 cursor-pointer text-sm sm:text-base"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                {t('compare_modal.submit_btn', 'Anfrage über WhatsApp senden')}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  if (!mounted) return null;

  return createPortal(modalContent, document.body);
}
