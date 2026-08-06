import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { User, Mail, CheckCircle2 } from 'lucide-react';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';

const contactSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  topic: z.string().min(1, 'Please select a topic'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  agreeToPrivacy: z.boolean().refine(val => val === true, {
    message: 'You must agree to the privacy policy'
  })
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const { t, i18n } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      topic: ''
    }
  });

  const onSubmit = async (_data: ContactFormValues) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  if (isSuccess) {
    return (
      <div className="bg-white dark:bg-[#0a1628] p-8 md:p-11 rounded-[20px] md:rounded-[22px] shadow-[0_10px_30px_rgba(10,22,40,0.08)] md:shadow-[0_20px_50px_rgba(10,22,40,0.10)] flex flex-col items-center justify-center text-center h-full min-h-[400px]">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="font-heading text-2xl font-semibold text-[#051024] dark:text-white mb-2">{t('contact.form_sent_title')}</h3>
        <p className="text-slate-600 dark:text-white/80">
          {t('contact.form_sent_desc')}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#0a1628] p-6 md:p-[44px_44px_40px] rounded-[20px] md:rounded-[22px] shadow-[0_10px_30px_rgba(10,22,40,0.08)] md:shadow-[0_20px_50px_rgba(10,22,40,0.10)]">
      {/* Mobile & Desktop Header */}
      <div className="flex items-center gap-2 text-[12px] md:text-[12.5px] font-bold tracking-[0.14em] uppercase text-[#f0a83f] mb-2.5 md:mb-[12px]">
        <div className="w-[18px] md:w-[22px] h-[2px] bg-[#f0a83f] rounded-sm"></div>
        {t('contact.form_header_sub')}
      </div>
      <h2 className="font-heading text-[22px] md:text-[28px] font-extrabold text-[#101828] mb-4 md:mb-[26px] tracking-[-0.01em]">{t('contact.form_header')}</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-[16px]">
        <div className="grid grid-cols-2 gap-2.5 md:gap-[16px]">
          <Input 
            icon={User} 
            placeholder={t('contact.form_fname')} 
            {...register('firstName')}
            error={errors.firstName?.message}
          />
          <Input 
            icon={User} 
            placeholder={t('contact.form_lname')} 
            {...register('lastName')}
            error={errors.lastName?.message}
          />
        </div>
        
        <Input 
          icon={Mail} 
          type="email" 
          placeholder={t('contact.form_email')} 
          {...register('email')}
          error={errors.email?.message}
        />
        
        <div className="relative">
          <select 
            {...register('topic')}
            className={`flex h-12 w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a1628] px-4 py-2 text-sm text-[#101828] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0047AB]/20 focus-visible:border-[#f0a83f] transition-all appearance-none ${errors.topic ? 'border-red-500' : ''}`}
          >
            <option value="" disabled>{t('contact.form_topic')}</option>
            <option value="electricity">{t('contact.form_topic_elec')}</option>
            <option value="gas">{t('contact.form_topic_gas')}</option>
            <option value="internet">{t('contact.form_topic_net')}</option>
            <option value="other">{t('contact.form_topic_other')}</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 dark:text-white/50">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          {errors.topic && <p className="text-sm text-red-500 mt-1">{errors.topic.message}</p>}
        </div>

        <Textarea 
          placeholder={t('contact.form_msg')} 
          {...register('message')}
          error={errors.message?.message}
        />
        
        <div className="flex items-start gap-2.5 md:gap-[10px] mt-[18px] md:mt-[22px]">
          <input 
            type="checkbox" 
            id="privacy" 
            className="mt-0.5 w-[20px] h-[20px] shrink-0 rounded border-[#e5e9f0] text-[#f0a83f] focus:ring-[#f0a83f]"
            {...register('agreeToPrivacy')}
          />
          <label htmlFor="privacy" className="text-[13px] md:text-[13.5px] text-[#475467] leading-[1.5]">
            {t('contact.form_privacy_text')} <a href="#" className="text-[#0a1628] font-semibold hover:underline">{t('contact.form_privacy_link')}</a>
          </label>
        </div>
        {errors.agreeToPrivacy && <p className="text-sm text-red-500">{errors.agreeToPrivacy.message}</p>}

        <button 
          type="submit"
          className="w-full md:w-auto mt-5 md:mt-[24px] rounded-full h-[52px] md:h-[54px] md:px-[30px] font-bold text-[15px] bg-[#0047AB] hover:bg-[#003380] text-white flex items-center justify-center gap-2.5 transition-colors disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? t('contact.form_btn_sending') : t('contact.form_btn_send')}
          {!isSubmitting && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={i18n.dir() === 'rtl' ? "rotate-180" : ""}><path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
        </button>
      </form>
    </div>
  );
}
