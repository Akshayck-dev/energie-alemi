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
  const headingText = t('home_hero.compare_tariff', 'Compare tariff');
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

    const messageText = `Hallo Energie Alemi,

Ich interessiere mich für einen Tarifvergleich. Hier sind meine Angaben:

👤 Name: ${name}
🔌 Bereich: ${service}
📍 PLZ: ${plz}
📞 Telefon: ${phone}
📝 Details/Verbrauch: ${details || 'Keine Angabe'}

Bitte kontaktieren Sie mich bezüglich passender Angebote.`;

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
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg bg-white dark:bg-[#0a1628] rounded-[2rem] border border-slate-100 dark:border-white/10 shadow-2xl z-10 p-6 md:p-8 max-h-[90vh] overflow-y-auto scrollbar-thin"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-9 h-9 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Schließen"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="mb-6 pr-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0047AB]/10 text-[#0047AB] dark:bg-[#4F8CFF]/15 dark:text-[#4F8CFF] text-xs font-semibold uppercase tracking-wider mb-2">
                <Send size={12} /> Tarifanfrage
              </span>
              <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">{headingText}</h3>
              <p className="text-sm text-slate-500 dark:text-white/60 mt-1 leading-relaxed">
                Geben Sie Ihre Details ein. Die Daten werden formatiert und direkt per WhatsApp an uns übertragen.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-white/60 uppercase tracking-wider mb-1.5">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ihr Vor- und Nachname"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#051024] text-slate-900 dark:text-white focus:outline-none focus:border-[#0047AB] dark:focus:border-[#4F8CFF] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-white/60 uppercase tracking-wider mb-1.5">
                    Bereich (Sparte) *
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#051024] text-slate-900 dark:text-white focus:outline-none focus:border-[#0047AB] dark:focus:border-[#4F8CFF] transition-colors"
                  >
                    <option value="Strom">Strom (Electricity)</option>
                    <option value="Gas">Gas (Gas)</option>
                    <option value="Internet">Internet (Internet)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-white/60 uppercase tracking-wider mb-1.5">
                    Postleitzahl (PLZ) *
                  </label>
                  <input
                    type="text"
                    required
                    pattern="[0-9]{5}"
                    maxLength={5}
                    value={plz}
                    onChange={(e) => setPlz(e.target.value.replace(/[^0-9]/g, ''))}
                    placeholder="z.B. 52062"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#051024] text-slate-900 dark:text-white focus:outline-none focus:border-[#0047AB] dark:focus:border-[#4F8CFF] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-white/60 uppercase tracking-wider mb-1.5">
                  Telefonnummer / WhatsApp-Nummer *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Für eventuelle Rückfragen"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#051024] text-slate-900 dark:text-white focus:outline-none focus:border-[#0047AB] dark:focus:border-[#4F8CFF] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-white/60 uppercase tracking-wider mb-1.5">
                  Verbrauch / Details (optional)
                </label>
                <textarea
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="z.B. 3500 kWh/Jahr oder 250 Mbit/s"
                  rows={2}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#051024] text-slate-900 dark:text-white focus:outline-none focus:border-[#0047AB] dark:focus:border-[#4F8CFF] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl font-bold bg-[#25D366] hover:bg-[#1EBE5A] text-white flex items-center justify-center gap-2.5 transition-transform hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-green-600/10 cursor-pointer mt-2"
              >
                <MessageCircle size={20} />
                Anfrage über WhatsApp senden
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
