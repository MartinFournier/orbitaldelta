/**
 * Originally taken from https://github.com/iamhosseindhv/notistack/issues/30#issuecomment-542863653
 */

import { Button } from '@mui/material';
import {
  OptionsObject,
  SnackbarKey,
  SnackbarMessage,
  useSnackbar,
  WithSnackbarProps,
} from 'notistack';
import React from 'react';

let useSnackbarRef: WithSnackbarProps;
export const SnackbarUtilsConfigurator: React.FC = () => {
  useSnackbarRef = useSnackbar();
  return null;
};

const defaultAction = (options: OptionsObject) => (key: SnackbarKey) => {
  let color: 'primary' | 'secondary' = 'primary';
  if (['success', 'info'].includes(options?.variant ?? '')) color = 'secondary';
  return (
    <Button
      color={color}
      onClick={() => {
        toastActions.close(key);
      }}
    >
      Dismiss
    </Button>
  );
};

export const toastActions = {
  success(msg: SnackbarMessage, options: OptionsObject = {}) {
    this.toast(msg, { variant: 'success', ...options });
  },
  warning(msg: SnackbarMessage, options: OptionsObject = {}) {
    this.toast(msg, { variant: 'warning', ...options });
  },
  info(msg: SnackbarMessage, options: OptionsObject = {}) {
    this.toast(msg, { variant: 'info', ...options });
  },
  error(msg: SnackbarMessage, options: OptionsObject = {}) {
    this.toast(msg, { variant: 'error', ...options });
  },
  toast(msg: SnackbarMessage, options: OptionsObject = {}) {
    const action = options.action ?? defaultAction(options);
    useSnackbarRef.enqueueSnackbar(msg, { action, ...options });
  },
  close(key: SnackbarKey) {
    useSnackbarRef.closeSnackbar(key);
  },
};

export const notifications = {
  gameSaved: () => toastActions.info('Saved Game', { autoHideDuration: 1000 }),
};

export default toastActions;
