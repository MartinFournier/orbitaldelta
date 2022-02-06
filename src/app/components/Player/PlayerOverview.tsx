import * as React from 'react';
import { TextField } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { usePlayerSlice } from './slice';
import { selectUsername } from './slice/selectors';

export function PlayerOverview() {
  const { actions } = usePlayerSlice();
  const dispatch = useDispatch();

  const username = useSelector(selectUsername);

  const onChangeUsername = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.changeUsername(evt.currentTarget.value));
  };

  return (
    <>
      <TextField type="text" placeholder="Username" value={username} onChange={onChangeUsername} />
    </>
  );
}
