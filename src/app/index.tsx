import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { ErrorHandler } from './components/ErrorHandler';
import { Engine } from './components/Engine';

import { PersistGate } from 'redux-persist/integration/react';
import { Persistor } from 'redux-persist';
import { Button } from '@mui/material';

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
        <meta name="description" content="An incremental based on automated rocketry." />
      </Helmet>
      <ErrorHandler>
        <PersistGate loading={<span>Loading...</span>} persistor={persistor}>
          <Engine>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route element={<NotFoundPage />} />
            </Routes>
          </Engine>
          <Button onClick={persistor.flush}>Save</Button>
        </PersistGate>
      </ErrorHandler>
      <GlobalStyle />
    </BrowserRouter>
  );
}
