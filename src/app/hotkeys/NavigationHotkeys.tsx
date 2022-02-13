import React from 'react';

import { HotKeys } from 'react-hotkeys';
import { HandlersMap, KeyMap } from '.';

export const map: KeyMap = {
  GO_HOME: 'ctrl+1',
};

const handlers: HandlersMap = {
  GO_HOME: event => console.log('Went home'),
};

export default function NavigationHotkeys({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HotKeys keyMap={map} handlers={handlers}>
      {children}
    </HotKeys>
  );
}
