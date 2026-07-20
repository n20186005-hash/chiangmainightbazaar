export const siteConfig = {
  name: 'Night Bazaar Chiang Mai',
  baseUrl: 'https://chiangmainightbazaar.com',
  slug: 'chiang-mai-night-bazaar',
  locales: ['zh', 'en', 'th'] as const,
};

export const ogLocale: Record<string, string> = {
  zh: 'zh_CN',
  en: 'en_US',
  th: 'th_TH',
};
