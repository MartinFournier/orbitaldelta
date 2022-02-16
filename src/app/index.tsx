import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PersistGate } from 'redux-persist/integration/react';
import { Persistor } from 'redux-persist';
import { SnackbarUtilsConfigurator } from './common/Toasts';
import { Engine } from './engine';
import { ErrorHandler } from './error-handler';

import pages from './pages';
import { MissionControlPage } from './pages/MissionControlPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { AboutPage } from './pages/AboutPage';
import { SettingsPage } from './pages/SettingsPage';
import { LoadingPage } from './pages/LoadingPage';
import { GlobalHotkeys } from './hotkeys';
import { GroundControlPage } from './pages/GroundControlPage';
import { VehiculeAssemblyPage } from './pages/VehiculeAssemblyPage';
import { DevPage } from './pages/DevPage';

import buildInfo from 'utilities/buildInfo';
import { StyledSnackbarProvider } from './common/StyledSnackbarProvider';
import AppThemeProvider from 'styles/provider';

interface AppProps {
  persistor: Persistor;
}

function AppRoutes({ persistor }: AppProps) {
  return (
    <Routes>
      <Route
        path={pages.missionControl.route}
        element={
          <MissionControlPage
            saveFn={persistor.flush}
            {...pages.missionControl}
          />
        }
      />
      <Route
        path={pages.groundControl.route}
        element={<GroundControlPage {...pages.groundControl} />}
      />
      <Route
        path={pages.vehiculeAssembly.route}
        element={<VehiculeAssemblyPage {...pages.vehiculeAssembly} />}
      />
      <Route
        path={pages.settings.route}
        element={<SettingsPage {...pages.settings} />}
      />
      <Route
        path={pages.about.route}
        element={<AboutPage {...pages.about} />}
      />
      <Route path={pages.dev.route} element={<DevPage {...pages.dev} />} />
      <Route
        path={pages.loading.route}
        element={<LoadingPage {...pages.loading} />}
      />
      <Route path="*" element={<NotFoundPage {...pages.notFound} />} />
    </Routes>
  );
}

export function App(props: AppProps) {
  const { i18n } = useTranslation();
  let template = `%s - Orbital Δ - v${buildInfo.version} (${buildInfo.commit})`;
  if (process.env.NODE_ENV !== 'production') template = `[dev] ${template}`;
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate={template}
        defaultTitle="Orbital Δ"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta
          name="description"
          content="An incremental based on automated rocketry."
        />
      </Helmet>
      <AppThemeProvider>
        <ErrorHandler>
          <PersistGate
            loading={<LoadingPage {...pages.loading} />}
            persistor={props.persistor}
          >
            <GlobalHotkeys>
              <StyledSnackbarProvider>
                <SnackbarUtilsConfigurator />
                <Engine>
                  <AppRoutes {...props} />
                </Engine>
              </StyledSnackbarProvider>
            </GlobalHotkeys>
          </PersistGate>
        </ErrorHandler>
      </AppThemeProvider>
    </BrowserRouter>
  );
}
