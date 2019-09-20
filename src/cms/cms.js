import CMS from 'netlify-cms-app';

import AboutPagePreview from './preview-templates/AboutPagePreview';

CMS.init();
CMS.registerPreviewTemplate('about', AboutPagePreview);
