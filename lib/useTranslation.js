'use client';
import { createContext, useContext, useState, useEffect } from 'react';

// Import translation files
import enTranslations from './translations-en.json';
import esTranslations from './translations-es.json';
import hiTranslations from './translations-hi.json';
import bnTranslations from './translations-bn.json';
import mrTranslations from './translations-mr.json';
import teTranslations from './translations-te.json';


const translations = {
  en: enTranslations,
  es: esTranslations,
  hi: hiTranslations,
  bn: bnTranslations,
  mr: mrTranslations,
  te: teTranslations,

};

// List of country codes for Mexico, Central America, and South America
const SPANISH_COUNTRIES = [
  'MX', 
  'GT', 'BZ', 'SV', 'HN', 'NI', 'CR', 'PA',
  'CO', 'EC', 'PE', 'BO', 'CL', 'AR', 'PY', 'UY', 'BR', 'VE', 'GY', 'SR', 'GF'
];

const TranslationContext = createContext();

export function TranslationProvider({ children }) {

  // Load saved locale first (fixes double click issue)
  const [locale, setLocale] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('mechnova-locale') || 'en';
    }
    return 'en';
  });

  const [isLoading, setIsLoading] = useState(true);

  // Detect user's country and set initial locale
  useEffect(() => {
    const detectLocale = async () => {
      try {
        const savedLocale = localStorage.getItem('mechnova-locale');
        if (savedLocale && ['en', 'es', 'hi', 'bn', 'mr', 'te'].includes(savedLocale)) {
          setLocale(savedLocale);
          setIsLoading(false);
          return;
        }

        const response = await fetch('https://ipapi.co/json/', { timeout: 3000 });

        if (response.ok) {
          const data = await response.json();
          const countryCode = data.country_code;

          // If user is NOT in Spanish-speaking countries → set EN
          if (countryCode && !SPANISH_COUNTRIES.includes(countryCode)) {
            setLocale('en');
          } else {
            setLocale('es'); // Spanish region
          }
        }
      } catch (error) {
        console.log('Location detect failed. Using default.');
      }

      setIsLoading(false);
    };

    detectLocale();
  }, []);

  // Save locale to storage
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('mechnova-locale', locale);
    }
  }, [locale, isLoading]);

  // FIXED: Direct language switch (no cycling)
  const switchLocale = (lang) => {
    setLocale(lang);
    localStorage.setItem('mechnova-locale', lang);
  };

  // Translation function
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[locale];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // fallback to English
        let fallback = translations.en;
        for (const fk of keys) {
          if (fallback && typeof fallback === 'object' && fk in fallback) {
            fallback = fallback[fk];
          } else {
            return key;
          }
        }
        return fallback;
      }
    }

    return value || key;
  };

  return (
    <TranslationContext.Provider value={{
      locale,
      setLocale,
      switchLocale,
      t,
      isLoading
    }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}
