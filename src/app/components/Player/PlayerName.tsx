import * as React from 'react';
import { TextField } from '@mui/material';

import { playerActions } from './slice';
import { selectUsername } from './slice/selectors';
import { useAppDispatch, useAppSelector } from 'store/hooks';

export function PlayerName() {
  const dispatch = useAppDispatch();
  const username = useAppSelector(selectUsername);

  const onChangeUsername = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(playerActions.changeUsername(evt.currentTarget.value));
  };

  return <TextField type="text" placeholder="Username" value={username} onChange={onChangeUsername} />;
}
