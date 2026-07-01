import type { Language } from '../types';

export const LANGUAGES: Language[] = [
  { code: 'en',    label: 'English',                nativeName: 'English',            flag: '🇬🇧' },
  { code: 'es',    label: 'Spanish',                nativeName: 'Español',            flag: '🇪🇸' },
  { code: 'pt',    label: 'Portuguese',             nativeName: 'Português',          flag: '🇵🇹' },
  { code: 'pt-BR', label: 'Brazilian Portuguese',   nativeName: 'Português (Brasil)', flag: '🇧🇷', dataKey: 'pt' },
  { code: 'fr',    label: 'French',                 nativeName: 'Français',           flag: '🇫🇷' },
  { code: 'de',    label: 'German',                 nativeName: 'Deutsch',            flag: '🇩🇪' },
  { code: 'it',    label: 'Italian',                nativeName: 'Italiano',           flag: '🇮🇹' },
  { code: 'hi',    label: 'Hindi',                  nativeName: 'हिन्दी',              flag: '🇮🇳' },
  { code: 'ru',    label: 'Russian',                nativeName: 'Русский',            flag: '🇷🇺' },
  { code: 'tr',    label: 'Turkish',                nativeName: 'Türkçe',             flag: '🇹🇷' },
  { code: 'ja',    label: 'Japanese',               nativeName: '日本語',              flag: '🇯🇵' },
  { code: 'zh',    label: 'Chinese (Simplified)',   nativeName: '中文（简体）',          flag: '🇨🇳' },
  { code: 'zh-TW', label: 'Chinese (Traditional)', nativeName: '中文（繁體）',          flag: '🇹🇼', dataKey: 'zh' },
  { code: 'ko',    label: 'Korean',                 nativeName: '한국어',              flag: '🇰🇷' },
  { code: 'ar',    label: 'Arabic',                 nativeName: 'العربية',            flag: '🇸🇦' },
];
