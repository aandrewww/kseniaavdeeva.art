const favicons = require('favicons');
const path = require('path');
const fs = require('fs');

const {
  siteTitleShort,
  themeColor,
  backgroundColor,
} = require('../site-config');

const dir = path.resolve(__dirname, '../public/icons/');

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const source = 'src/images/icon.png';
const configuration = {
  path: '/icons/',
  appName: siteTitleShort,
  appDescription: null,
  developerName: null,
  developerURL: null,
  dir: 'auto',
  lang: 'en-US',
  background: backgroundColor,
  theme_color: themeColor,
  display: 'standalone',
  orientation: 'any',
  start_url: '/',
  version: '1.0',
  logging: true,
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: true,
    coast: false,
    favicons: true,
    firefox: false,
    windows: true,
    yandex: false,
  },
};

const callback = (err, res) => {
  if (err) {
    console.log(err.message);

    return;
  }

  res.images.forEach((image) => {
    fs.writeFile(
      path.resolve(__dirname, '../public/icons/', image.name),
      image.contents,
      (error) => {
        if (error) {
          console.log(error);
        }
      }
    );
  });

  res.files.forEach((file) => {
    fs.writeFile(
      path.resolve(__dirname, '../public/', file.name),
      file.contents,
      (error) => {
        if (error) {
          console.log(error);
        }
      }
    );
  });
};

favicons(source, configuration, callback);
