'use client';
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from '@/lib/useTranslation';

export default function LanguageDropdown({ className = '' }) {
  const { locale, switchLocale } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getLocaleLabel = () => {
    switch (locale) {
      case 'en': return 'EN';
      case 'es': return 'ES';
      case 'hi': return 'HI';
      case 'bn': return 'BN';
      case 'mr': return 'MR'; 
      case 'te': return 'TE'; 
      case 'gj': return 'GJ';
      default: return 'EN';
      
    }
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="px-4 py-2 bg-[#0072ce] text-white rounded-lg hover:bg-[#005fa3] transition flex items-center gap-2"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {getLocaleLabel()}
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul
          className="absolute pb-1 left-0 mt-2 w-21 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
          role="listbox"
        >
          <li>
            <button
              className={`w-full text-left px-4 py-2 hover:bg-[#e6f2fb] ${
                locale === 'en' ? 'font-bold text-[#0072ce]' : ''
              }`}
              onClick={() => { switchLocale('en'); setOpen(false); }}
              role="option"
              aria-selected={locale === 'en'}
            >
              EN
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left px-4 py-2 hover:bg-[#e6f2fb] ${
                locale === 'es' ? 'font-bold text-[#0072ce]' : ''
              }`}
              onClick={() => { switchLocale('es'); setOpen(false); }}
              role="option"
              aria-selected={locale === 'es'}
            >
              ES
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left px-4 py-2 hover:bg-[#e6f2fb] ${
                locale === 'hi' ? 'font-bold text-[#0072ce]' : ''
              }`}
              onClick={() => { switchLocale('hi'); setOpen(false); }}
              role="option"
              aria-selected={locale === 'hi'}
            >
              हिन्दी
            </button>
          </li>
          <li>
          <button
            className={`w-full text-left px-4 py-2 hover:bg-[#e6f2fb] ${
              locale === 'bn' ? 'font-bold text-[#0072ce]' : ''
            }`}
            onClick={() => { switchLocale('bn'); setOpen(false); }}
            role="option"
            aria-selected={locale === 'bn'}
          >
            বাংলা
          </button>
        </li>
        <li>
        <button
          className={`w-full text-left px-4 py-2 hover:bg-[#e6f2fb] ${
            locale === 'mr' ? 'font-bold text-[#0072ce]' : ''
          }`}
          onClick={() => { switchLocale('mr'); setOpen(false); }}
          role="option"
          aria-selected={locale === 'mr'}
        >
          मराठी
        </button>
      </li>
      <li>
      <button
        className={`w-full text-left px-4 py-2 hover:bg-[#e6f2fb] ${
          locale === 'te' ? 'font-bold text-[#0072ce]' : ''
        }`}
        onClick={() => { switchLocale('te'); setOpen(false); }}
        role="option"
        aria-selected={locale === 'te'}
      >
        తెలుగు
      </button>
    </li>

    <li>
            <button
              className={`w-full text-left px-4 py-2 hover:bg-[#e6f2fb] ${
                locale === 'gj' ? 'font-bold text-[#0072ce]' : ''
              }`}
              onClick={() => { switchLocale('gj'); setOpen(false); }}
              role="option"
              aria-selected={locale === 'gj'}
            >
              ગુજરાતી
            </button>
          </li>

      


        </ul>
      )}
    </div>
  );
}
