import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Send } from 'lucide-react';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';

interface CompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function CompareModal({ isOpen, onClose, defaultService }: CompareModalProps) {
  const { t } = useTranslation();
  const headingText = t('compare_modal.title', 'Reach out to us');
  const [name, setName] = useState('');
  const [service, setService] = useState(defaultService || 'Strom');
  const [phone, setPhone] = useState('');
  const [plz, setPlz] = useState('');
  const [details, setDetails] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !plz) return;

    const messageText = t('compare_modal.whatsapp_template', `Hallo Energie Alemi,\n\nIch interessiere mich für einen Tarifvergleich. Hier sind meine Angaben:\n\n👤 Name: {{name}}\n🔌 Bereich: {{service}}\n📍 PLZ: {{plz}}\n📞 Telefon: {{phone}}\n📝 Details/Verbrauch: {{details}}\n\nBitte kontaktieren Sie mich bezüglich passender Angebote.`, {
      name,
      service,
      plz,
      phone,
      details: details || t('compare_modal.no_details', 'Keine Angabe')
    });

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/4917665949390?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Reset form and close
    setName('');
    setService('Strom');
    setPhone('');
    setPlz('');
    setDetails('');
    onClose();
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] overflow-y-auto p-4 flex justify-center items-start sm:items-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-md bg-white dark:bg-[#0a1628] rounded-[1.5rem] border border-slate-100 dark:border-white/10 shadow-2xl z-10 p-5 sm:p-6 my-4 sm:my-0"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Schließen"
            >
              <X size={16} />
            </button>

            {/* Header */}
            <div className="mb-4 pr-8">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0047AB]/10 text-[#0047AB] dark:bg-[#4F8CFF]/15 dark:text-[#4F8CFF] text-[10px] font-semibold uppercase tracking-wider mb-2">
                <Send size={10} /> {t('compare_modal.inquiry_badge', 'Tarifanfrage')}
              </span>
              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white leading-tight">{headingText}</h3>
              <p className="text-xs text-slate-500 dark:text-white/60 mt-1 leading-relaxed">
                {t('compare_modal.subhead', 'Geben Sie Ihre Details ein. Die Daten werden formatiert und direkt per WhatsApp an uns übertragen.')}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3.5">
              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-slate-500 dark:text-white/60 uppercase tracking-wider mb-1">
                  {t('compare_modal.name_label', 'Name *')}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('compare_modal.name_placeholder', 'Ihr Vor- und Nachname')}
                  className="w-full px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#051024] text-slate-900 dark:text-white focus:outline-none focus:border-[#0047AB] dark:focus:border-[#4F8CFF] transition-colors text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-500 dark:text-white/60 uppercase tracking-wider mb-1 truncate">
                    {t('compare_modal.service_label', 'Bereich (Sparte) *')}
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#051024] text-slate-900 dark:text-white focus:outline-none focus:border-[#0047AB] dark:focus:border-[#4F8CFF] transition-colors text-sm"
                  >
                    <option value="Strom">{t('compare_modal.service_elec', 'Strom (Electricity)')}</option>
                    <option value="Gas">{t('compare_modal.service_gas', 'Gas (Gas)')}</option>
                    <option value="Internet">{t('compare_modal.service_internet', 'Internet (Internet)')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-500 dark:text-white/60 uppercase tracking-wider mb-1 truncate">
                    {t('compare_modal.plz_label', 'Postleitzahl (PLZ) *')}
                  </label>
                  <input
                    type="text"
                    required
                    pattern="[0-9]{5}"
                    maxLength={5}
                    value={plz}
                    onChange={(e) => setPlz(e.target.value.replace(/[^0-9]/g, ''))}
                    placeholder={t('compare_modal.plz_placeholder', 'z.B. 52062')}
                    className="w-full px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#051024] text-slate-900 dark:text-white focus:outline-none focus:border-[#0047AB] dark:focus:border-[#4F8CFF] transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-slate-500 dark:text-white/60 uppercase tracking-wider mb-1">
                  {t('compare_modal.phone_label', 'Telefonnummer / WhatsApp-Nummer *')}
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t('compare_modal.phone_placeholder', 'Für eventuelle Rückfragen')}
                  className="w-full px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#051024] text-slate-900 dark:text-white focus:outline-none focus:border-[#0047AB] dark:focus:border-[#4F8CFF] transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-slate-500 dark:text-white/60 uppercase tracking-wider mb-1">
                  {t('compare_modal.details_label', 'Verbrauch / Details (optional)')}
                </label>
                <input
                  type="text"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder={t('compare_modal.details_placeholder', 'z.B. 3500 kWh/Jahr oder 250 Mbit/s')}
                  className="w-full px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#051024] text-slate-900 dark:text-white focus:outline-none focus:border-[#0047AB] dark:focus:border-[#4F8CFF] transition-colors text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl font-bold bg-[#25D366] hover:bg-[#1EBE5A] text-white flex items-center justify-center gap-2 transition-transform hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-green-600/10 cursor-pointer mt-1 text-sm sm:text-base"
              >
                <MessageCircle size={18} />
                {t('compare_modal.submit_btn', 'Anfrage über WhatsApp senden')}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  if (!mounted) return null;

  return createPortal(modalContent, document.body);
}
