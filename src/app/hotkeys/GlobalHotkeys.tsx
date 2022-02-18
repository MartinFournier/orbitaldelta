import { notifications } from 'app/common/Toasts';
import { saveGame } from 'app/engine/slice';
import { usePersistor } from 'app/engine/usePersistor';
import { gameTimeActions } from 'app/game-time/slice';
import pages from 'app/pages';
import React from 'react';

import { GlobalHotKeys } from 'react-hotkeys';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'store/hooks';
import { HandlersMap, KeyMap } from '.';

export const map: KeyMap = {
  KONAMI: 'up up down down left right left right b a',

  GAME_SAVE: 'ctrl+s',

  GAME_TOGGLE_PAUSE: 'space',
  GAME_TOGGLE_TURBO: '`',

  GAME_SPEED_INCREASE: { sequence: '+', action: 'keyup' },
  GAME_SPEED_DECREASE: { sequence: '-', action: 'keyup' },

  GAME_SPEED_1: '1',
  GAME_SPEED_2: '2',
  GAME_SPEED_3: '3',
  GAME_SPEED_4: '4',
  GAME_SPEED_5: '5',

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
  const dispatch = useAppDispatch();
  const persistor = usePersistor();

  const handlers: HandlersMap = {
    GAME_SAVE: async event => {
      event?.preventDefault();
      if (!persistor) return;
      await dispatch(saveGame(persistor.flush));
      notifications.gameSaved();
    },
    GAME_TOGGLE_PAUSE: event => {
      event?.preventDefault();
      dispatch(gameTimeActions.togglePauseGame());
    },
    GAME_TOGGLE_TURBO: event => {
      event?.preventDefault();
      dispatch(gameTimeActions.toggleTurbo());
    },
    GAME_SPEED_INCREASE: event => {
      event?.preventDefault();
      dispatch(gameTimeActions.increaseSpeed());
    },
    GAME_SPEED_DECREASE: event => {
      event?.preventDefault();
      dispatch(gameTimeActions.decreaseSpeed());
    },
    GAME_SPEED_1: event => {
      event?.preventDefault();
      dispatch(gameTimeActions.setSpeedByIndex(0));
    },
    GAME_SPEED_2: event => {
      event?.preventDefault();
      dispatch(gameTimeActions.setSpeedByIndex(1));
    },
    GAME_SPEED_3: event => {
      event?.preventDefault();
      dispatch(gameTimeActions.setSpeedByIndex(2));
    },
    GAME_SPEED_4: event => {
      event?.preventDefault();
      dispatch(gameTimeActions.setSpeedByIndex(3));
    },
    GAME_SPEED_5: event => {
      event?.preventDefault();
      dispatch(gameTimeActions.setSpeedByIndex(4));
    },

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
