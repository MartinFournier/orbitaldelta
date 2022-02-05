import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { ErrorHandler } from './components/ErrorHandler';
import { Engine } from './components/Engine';

export function App() {
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
        <Engine>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route element={<NotFoundPage />} />
          </Routes>
        </Engine>
      </ErrorHandler>
      <GlobalStyle />
    </BrowserRouter>
  );
}
