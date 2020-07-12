import React from 'react';
import { renderToString } from 'react-dom/server';
import AppProvider from 'store/provider';

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  // React Context in SSR/build
  const ConnectedBody = () => <AppProvider>{bodyComponent}</AppProvider>;
  replaceBodyHTMLString(renderToString(<ConnectedBody />));
};
