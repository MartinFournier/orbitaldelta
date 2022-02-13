import pages from 'app/pages';
import React from 'react';

import { GlobalHotKeys } from 'react-hotkeys';
import { useNavigate } from 'react-router-dom';
import { HandlersMap, KeyMap } from '.';

export const map: KeyMap = {
  KONAMI: 'up up down down left right left right b a',

  ROUTE_TO_MAIN: 'ctrl+1',
  ROUTE_TO_SETTINGS: 'ctrl+2',
  ROUTE_TO_ABOUT: 'ctrl+3',
};

export default function GlobalHotkeys({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigate();

  const handlers: HandlersMap = {
    ROUTE_TO_MAIN: event => {
      event?.preventDefault();
      navigate(pages.main.route);
    },
    ROUTE_TO_SETTINGS: event => {
      event?.preventDefault();
      navigate(pages.settings.route);
    },
    ROUTE_TO_ABOUT: event => {
      event?.preventDefault();
      navigate(pages.about.route);
    },
  };

  return (
    <GlobalHotKeys keyMap={map} handlers={handlers}>
      {children}
    </GlobalHotKeys>
  );
}
