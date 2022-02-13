import { configure, KeyMap } from 'react-hotkeys';

export { default as GlobalHotkeys } from './GlobalHotkeys';
export { default as NavigationHotkeys } from './NavigationHotkeys';

export type { KeyMap };

export type HandlersMap = {
  [key: string]: (keyEvent?: KeyboardEvent) => void;
};

export const configureHotkeys = () => {
  console.debug('Configuring react-hotkeys');
  // https://github.com/greena13/react-hotkeys#configuration
  configure({
    logLevel: 'debug',
  });
};
