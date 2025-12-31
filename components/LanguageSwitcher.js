'use client';
import { useTranslation } from '@/lib/useTranslation';

export default function LanguageSwitcher({ className = '' }) {
  const { locale, switchLocale } = useTranslation();

  return (
    <select
      value={locale}
      onChange={e => switchLocale(e.target.value)}
      className={`relative p-2 rounded-2xl bg-[#0072ce] text-white hover:bg-[#005fa3] transition cursor-pointer text-lg ${className}`}
      aria-label="Select language"
    >
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="hi">हिन्दी</option>
      <option value="bn">বাংলা</option>
      <option value="mr">मराठी</option>

    </select>
  );
}
