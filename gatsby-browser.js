import React from 'react';
import AppProvider from 'store/provider';

// React Context in Browser
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => <AppProvider>{element}</AppProvider>;
