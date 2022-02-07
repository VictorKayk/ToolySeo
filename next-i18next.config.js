module.exports = {
  i18n: {
    locales: ['en', 'pt-BR'],
    defaultLocale: 'en',
    localeDetection: true,
    reloadOnPrerender: process.env.NODE_ENV === 'development',
  },
};
