// import React from 'react';
import CMS, { init } from 'netlify-cms-app';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import ProjectsPagePreview from './preview-templates/ProjectsPagePreview';

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('projects', ProjectsPagePreview);

init();
