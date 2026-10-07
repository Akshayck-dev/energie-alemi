import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calculator } from 'lucide-react';

export default function StromkostenRechner() {
  const { i18n } = useTranslation();
  
  // Default values
  const [verbrauch, setVerbrauch] = useState<number>(2500);
  const [arbeitspreis, setArbeitspreis] = useState<number>(37.13);
  const [grundpreis, setGrundpreis] = useState<number>(114);

  const calculateCosts = () => {
    const total = (verbrauch * (arbeitspreis / 100)) + grundpreis;
    const monthly = total / 12;
    return {
      total: total.toFixed(2).replace('.', ','),
      monthly: monthly.toFixed(2).replace('.', ',')
    };
  };

  const costs = calculateCosts();

  const isDe = i18n.language !== 'en';

  return (
    <div className="bg-white dark:bg-[#0a1628] rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-800 my-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-[#0047AB]/10 flex items-center justify-center text-[#0047AB] dark:text-[#60a5fa] dark:bg-[#60a5fa]/10">
          <Calculator size={20} />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white m-0">
          {isDe ? 'Stromkosten-Rechner' : 'Electricity Cost Calculator'}
        </h3>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
            {isDe ? 'Jahresverbrauch (kWh)' : 'Annual Consumption (kWh)'}
          </label>
          <input 
            type="number"
            value={verbrauch}
            onChange={(e) => setVerbrauch(Number(e.target.value))}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#0047AB] dark:focus:ring-[#60a5fa] focus:border-transparent outline-none transition-all"
            min="0"
            step="100"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
            {isDe ? 'Arbeitspreis (Cent/kWh)' : 'Unit Price (Cent/kWh)'}
          </label>
          <input 
            type="number"
            value={arbeitspreis}
            onChange={(e) => setArbeitspreis(Number(e.target.value))}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#0047AB] dark:focus:ring-[#60a5fa] focus:border-transparent outline-none transition-all"
            min="0"
            step="0.01"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
            {isDe ? 'Grundpreis (Euro/Jahr)' : 'Base Price (Euro/Year)'}
          </label>
          <input 
            type="number"
            value={grundpreis}
            onChange={(e) => setGrundpreis(Number(e.target.value))}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#0047AB] dark:focus:ring-[#60a5fa] focus:border-transparent outline-none transition-all"
            min="0"
            step="1"
          />
        </div>
      </div>

      <div className="bg-[#f8fafc] dark:bg-slate-800/50 rounded-xl p-6 mb-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-1">{isDe ? 'Geschätzte Jahreskosten' : 'Estimated Annual Costs'}</p>
            <p className="text-3xl font-bold text-slate-900 dark:text-white">{costs.total} €</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-slate-200 dark:bg-slate-700"></div>
          <div className="text-center md:text-left">
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-1">{isDe ? 'Monatlicher Abschlag' : 'Monthly Payment'}</p>
            <p className="text-3xl font-bold text-[#0047AB] dark:text-[#60a5fa]">{costs.monthly} €</p>
          </div>
        </div>
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400 text-center mb-1">
        {isDe 
          ? 'Ergebnis ist eine Schätzung. Bonus nicht berücksichtigt.' 
          : 'Result is an estimate. Bonus not included.'}
      </p>
      <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-2 italic">
        {isDe 
          ? 'Beispiel: STAWAG Strom Basis, Preisblatt ab 01.01.2026 – kein Tarifangebot' 
          : 'Example: STAWAG Strom Basis, price sheet from Jan 1, 2026 – not a tariff offer'}
      </p>
    </div>
  );
}
