// import React from 'react';
import CMS, { init } from 'netlify-cms-app';
import FileSystemBackend from 'netlify-cms-backend-fs';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import ProjectsPagePreview from './preview-templates/ProjectsPagePreview';

// If running in development
if (process.env.NODE_ENV === 'development') {
  window.CMS_ENV = 'development_overrides'; // Set the CMS_ENV to the development_ overrides.

  CMS.registerBackend('file-system', FileSystemBackend); // Register the FileSystemBackend.
}

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('projects', ProjectsPagePreview);

init();
