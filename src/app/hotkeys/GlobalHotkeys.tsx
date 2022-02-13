import React from 'react';

import { GlobalHotKeys } from 'react-hotkeys';
import { HandlersMap, KeyMap } from '.';

export const map: KeyMap = {
  KONAMI: 'up up down down left right left right b a',
};

const handlers: HandlersMap = {
  KONAMI: event => console.log('Konami'),
};

export default function GlobalHotkeys({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlobalHotKeys keyMap={map} handlers={handlers}>
      {children}
    </GlobalHotKeys>
  );
}
