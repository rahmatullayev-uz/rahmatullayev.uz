import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import uz from './locales/uz.json';
import en from './locales/en.json';
import ru from './locales/ru.json';

i18n
  .use(LanguageDetector) // Foydalanuvchi tilini aniqlash
  .use(initReactI18next) // React integratsiyasi
  .init({
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    resources: {
      uz: { translation: uz },
      en: { translation: en },
      ru: { translation: ru },
    },
    fallbackLng: 'uz', // Agar til aniqlanmasa, standart til
    interpolation: {
      escapeValue: false, // React o'zi xavfsiz HTML qiladi
    },
  });


export default i18n;