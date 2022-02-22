import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DateTimePicker } from '@mui/lab';
import { DevAdjuster } from './DevAdjuster';
import { useAppDispatch } from 'store/hooks';
import { gameTimeActions } from 'app/game-time/slice';
import { Button, ButtonGroup, TextField } from '@mui/material';
import { gameStartTime } from 'app/game-time';

export function GameTimeAdjuster() {
  const [date, setDate] = useState<number | undefined>(gameStartTime);

  const dispatch = useAppDispatch();
  const modifyTime = (increment: number) =>
    dispatch(gameTimeActions.incrementDeltaMs(increment));
  const setTime = (newDate: number) => {
    dispatch(
      gameTimeActions.updateGameTime({
        newTime: newDate,
        processedOn: new Date().getTime(),
        consumedTurboDeltaMs: 0,
      }),
    );
  };

  return (
    <Box sx={{ my: 2 }}>
      <ButtonGroup sx={{ mb: 2 }}>
        <DateTimePicker
          renderInput={props => <TextField {...props} />}
          ampm={false}
          mask="____-__-__ __:__"
          label="Current Date"
          value={date}
          onChange={(newValue: Date | null) => {
            if (!newValue) return;
            setDate(newValue.getTime());
          }}
        />
        <Button
          onClick={() => {
            if (!date) return;
            setTime(date);
          }}
          disabled={!date}
          variant="outlined"
          sx={{ ml: 2 }}
        >
          Set Date
        </Button>
      </ButtonGroup>
      <DevAdjuster
        keyId="time"
        label="Game Time (ms)"
        defaultIncrement={1000 * 60 * 60}
        bigValueMultiplier={24}
        incrementFn={modifyTime}
      />
    </Box>
  );
}

export function TurboAdjuster() {
  const dispatch = useAppDispatch();
  const modifyTurboTime = (increment: number) =>
    dispatch(gameTimeActions.incrementTurboDeltaMs(increment));
  const setTurboTime = (value: number) =>
    dispatch(gameTimeActions.updateTurboDeltaMs(value));
  return (
    <DevAdjuster
      keyId="turbo"
      label="Turbo Time (ms)"
      defaultIncrement={1000 * 60 * 60}
      bigValueMultiplier={24}
      incrementFn={modifyTurboTime}
      setValueFn={setTurboTime}
    />
  );
}

export function GameTime() {
  return (
    <Box>
      <GameTimeAdjuster />
      <TurboAdjuster />
    </Box>
  );
}
