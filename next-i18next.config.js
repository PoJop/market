const path = require("path");

module.exports = {
    i18n: {
        defaultLocale: 'uk',
        locales: ["uk", "en"],
        localeDetection: false,
        localePath: path.resolve('./public/locales'),
        domains: [
            {
              domain: '/',
              defaultLocale: 'uk',
            },
            {
              domain: '/en',
              defaultLocale: 'en',
            },
          ],
    },
}