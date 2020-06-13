<p align="center">
  <a href="https://app.netlify.com/sites/kseniaavdeeva/deploys">
    <img
      src="https://api.netlify.com/api/v1/badges/30841125-fb05-4fbe-8d25-8d5b5ca19812/deploy-status"
      alt="Netlify Status"
    />
  </a>
</p>

<p align="center">
  Personal <em>website/portfolio</em> based on Gatsby, React, theme-ui, Netlify, Netlify CMS and with focus on accessibility and SEO. <code>JAMstack site!</code>
</p>

<p align="center">
  <strong>
    You can check this website at <a href="https://kseniaavdeeva.art">kseniaavdeeva.art</a>.
  </strong>
</p>

***

## Features

- [x] 🚥 Netlify as deployment service
- [x] 📝 NetlifyCMS as content management system
- [X] 🤩 Page Transitions, component-based (with no-js support)
- [X] 👮‍♂️ `IntersectionObserver`, component-based (with polyfill)
- [X] 🌿 React Context for global UI state, with SSR
- [X] 💅 [`theme-ui`](https://theme-ui.com/) and [`gatsby-plugin-theme-ui`](https://theme-ui.com/gatsby-plugin/) for build app based on constraint-based design principles
- [X] 💯 Optimized with [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/) (including test)
- [X] 🔥 Code Splitting of JS (component based)
- [X] 🔪 Inline SVG support
- [X] ⚙️ One config file for site-wide settings
- [X] 💙 Most social + meta tags in one component
- [X] 🖼 All favicons generated, only one icon file needed
- [X] 🌐 Offline support
- [X] 📄 Manifest support
- [X] 🗺 Sitemap support
- [X] 🌗 Night mode support
- [X] 😎 [Prettier](https://prettier.io/) for code style
- [X] ⛑ [Renovate](https://github.com/renovatebot/renovate) support
- [X] 🐙 Schema JSONLD
- [X] 🔎 [`size-plugin`](https://github.com/GoogleChromeLabs/size-plugin) to keep an eye on your bundle sizes
- [X] 👨‍🏫 ESLint (based on [`eslint-plugin-react`](./.eslintrc))

Do you have suggestions or feedback? [Open an issue](https://github.com/aandrewww/kseniaavdeeva.art/issues/new)!

## Lighthouse scores (on [Netlify](https://netlify.com))

[![Lighthouse scores (on Netlify)](https://lighthouse.now.sh/?perf=90&pwa=96&a11y=88&bp=93&seo=92)](https://kseniaavdeeva.art/)

## Usage

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/aandrewww/kseniaavdeeva.art)

```bash
# Installation with `gatsby-cli`
gatsby new my-site https://github.com/aandrewww/kseniaavdeeva.art

# Installation with `git clone`
git clone git@github.com:aandrewww/kseniaavdeeva.art.git my-site
cd my-site
npm install

# To develop
npm run develop

# To build
npm run build

# To test SSR (for Lighthouse etc.)
npm run ssr

# To format JS
npm run format

# To generate favicons (included in `build`)
npm run build:favicons

# Up Dependencies
npm run up
```

## Configuration

Find the site-wide configuration in `site-config.js`.

```js
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
```

> 🚨 Don't forget to update your `robots.txt` inside `static/`!

## Folder structure
```bash
├── gatsby-browser.js # Specify how Gatsby renders pages in the browser
├── gatsby-config.js # Gatsby config, mostly taken from `site-config.js`
├── gatsby-node.js # Modify webpack config
├── gatsby-ssr.js # Specify how Gatsby builds pages
├── site-config.js # Global settings for the whole site, used by multiple scripts
├── static # Content, data, content images and netlifycms admin folders
├── src
│   ├── cms # Components for preview in NetlifyCMS
│   ├── components # Different components for pages
│   ├── constants # Site-wide constants
│   ├── containers # Container components if store is needed
│   ├── gatsby-plugin-theme-ui # Folder with theme-ui configs
│   ├── helpers # Different helpers
│   ├── images # Images needed by the site/theme (not content)
│   ├── pages # Website pages
│   ├── store # Store and provider of a React.createContext instance
│   └── templates # Templates for pages
└── scripts
    ├── lighthouse.test.js # Tests the site specified inside `site-config.js` with Google Lighthouse (WIP)
    └── favicons.js # Generates favicons and manifest using one png only.
```

## Author

* [Andrew Avdeev](https://andrewavdeev.com)
