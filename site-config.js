const path = require('path');

module.exports = {
  siteTitle: 'Ksenia Avdeeva | Protfolio',
  siteTitleShort: 'Portfolio',
  siteDescription: 'Ksenia avdeeva | Portfolio',
  siteUrl: 'https://kseniaavdeeva.art',
  themeColor: '#000',
  backgroundColor: '#fff',
  pathPrefix: null,
  logo: path.resolve(__dirname, 'src/images/icon.png'),
  social: {
    twitter: '',
    fbAppId: '',
  },
  googleAnalyticsId: process.env.GA_ID || '',
};
