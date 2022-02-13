/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Use consistent styling
import 'sanitize.css/sanitize.css';

import { App } from 'app';
import { HelmetProvider } from 'react-helmet-async';
import { store, persistor } from 'store';
import reportWebVitals from 'utilities/reportWebVitals';
import { configureHotkeys } from 'app/hotkeys';

// Initialize languages
import './locales/i18n';

configureHotkeys();

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <Provider store={store}>
    <HelmetProvider>
      <App persistor={persistor} />
    </HelmetProvider>
  </Provider>,
  MOUNT_NODE,
);

// Hot reloadable translation json files
if (module.hot) {
  module.hot.accept(['./locales/i18n'], () => {
    // No need to render the App again because i18next works with the hooks
  });

  // Write to the console to see when app was updated
  module.hot.addStatusHandler(status => {
    if (status === 'prepare') {
      console.log('='.repeat(50));
      console.log('Hot Reload > Refreshed');
      console.log('='.repeat(50));
    }
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
