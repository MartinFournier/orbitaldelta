import * as React from 'react';
import Box from '@mui/material/Box';
import { DevAdjuster } from './DevAdjuster';
import { useAppDispatch } from 'store/hooks';
import { gameTimeActions } from 'app/game-time/slice';

export function GameTime() {
  const dispatch = useAppDispatch();
  const modifyTurboTime = (increment: number) =>
    dispatch(gameTimeActions.incrementTurboDeltaMs(increment));
  const setTurboTime = (value: number) =>
    dispatch(gameTimeActions.updateTurboDeltaMs(value));
  return (
    <Box>
      <DevAdjuster
        keyId="turbo"
        label="Turbo Time"
        defaultIncrement={10_000}
        bigValueMultiplier={1000}
        incrementFn={modifyTurboTime}
        setValueFn={setTurboTime}
      />
    </Box>
  );
}
