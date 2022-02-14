import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { useTranslation } from 'react-i18next';
import { PersistGate } from 'redux-persist/integration/react';
import { Persistor } from 'redux-persist';
import { SnackbarUtilsConfigurator } from './common/Toasts';
import { GlobalStyle } from 'styles/global-styles';
import { Engine } from './engine';
import { ErrorHandler } from './error-handler';

import pages from './pages';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { AboutPage } from './pages/AboutPage';
import { SettingsPage } from './pages/SettingsPage';
import { LoadingPage } from './pages/LoadingPage';
import { GlobalHotkeys } from './hotkeys';
import { GroundControlPage } from './pages/GroundControlPage';

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
        <PersistGate
          loading={<LoadingPage {...pages.loading} />}
          persistor={persistor}
        >
          <GlobalHotkeys>
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
                    path={pages.groundControl.route}
                    element={<GroundControlPage {...pages.groundControl} />}
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
                    path={pages.loading.route}
                    element={<LoadingPage {...pages.loading} />}
                  />
                  <Route
                    path="*"
                    element={<NotFoundPage {...pages.notFound} />}
                  />
                </Routes>
              </Engine>
            </SnackbarProvider>
          </GlobalHotkeys>
        </PersistGate>
      </ErrorHandler>
      <GlobalStyle />
    </BrowserRouter>
  );
}
