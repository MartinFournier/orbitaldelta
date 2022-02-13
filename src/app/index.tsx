import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { AboutPage } from './pages/AboutPage';
import { SettingsPage } from './pages/SettingsPage';
import { useTranslation } from 'react-i18next';
import { ErrorHandler } from './error-handler';
import { Engine } from './engine';

import { PersistGate } from 'redux-persist/integration/react';
import { Persistor } from 'redux-persist';

import { SnackbarUtilsConfigurator } from './common/Toasts';
import pages from './navigation/pages';

interface AppProps {
  persistor: Persistor;
}

export function App({ persistor }: AppProps) {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Orbital Target"
        defaultTitle="Orbital Target"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta
          name="description"
          content="An incremental based on automated rocketry."
        />
      </Helmet>
      <ErrorHandler>
        <PersistGate loading={<span>Loading...</span>} persistor={persistor}>
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <SnackbarUtilsConfigurator />
            <Engine>
              <Routes>
                <Route
                  path={pages.main.route}
                  element={
                    <HomePage saveFn={persistor.flush} {...pages.main} />
                  }
                />
                <Route
                  path={pages.settings.route}
                  element={<SettingsPage {...pages.settings} />}
                />
                <Route
                  path={pages.about.route}
                  element={<AboutPage {...pages.about} />}
                />
                <Route
                  path="*"
                  element={<NotFoundPage {...pages.notFound} />}
                />
              </Routes>
            </Engine>
          </SnackbarProvider>
        </PersistGate>
      </ErrorHandler>
      <GlobalStyle />
    </BrowserRouter>
  );
}
