import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { AppCheckbox } from 'app/common/AppCheckbox';
import {
  selectAutosaveEnabled,
  selectAutosaveFrequencyMins,
} from './slice/selectors';
import { settingsActions, AutosavePayload } from './slice';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { Typography } from '@mui/material';

export default function AutosaveSlider() {
  const dispatch = useAppDispatch();
  const autosaveEnabled = useAppSelector(selectAutosaveEnabled);
  const autosaveFrequency = useAppSelector(selectAutosaveFrequencyMins);
  const [frequency, setFrequency] = useState(autosaveFrequency);

  const handleChangeAutosave = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => {
    const payload: AutosavePayload = {
      autosaveEnabled: checked,
      autosaveFrequencyMinutes: autosaveFrequency,
    };
    dispatch(settingsActions.changeAutosave(payload));
  };

  const handleChangeFrequency = (
    e: React.SyntheticEvent | Event,
    value: number | number[],
  ) => {
    setFrequency(value as number);
  };

  const handleCommitFrequency = (
    e: React.SyntheticEvent | Event,
    value: number | number[],
  ) => {
    const payload: AutosavePayload = {
      autosaveEnabled,
      autosaveFrequencyMinutes: value as number,
    };
    dispatch(settingsActions.changeAutosave(payload));
  };

  return (
    <Box sx={{ width: 300 }}>
      <Typography gutterBottom>Autosave Interval</Typography>
      <Slider
        aria-label="Autosave Interval"
        step={1}
        min={1}
        max={60}
        valueLabelDisplay="auto"
        value={frequency}
        marks={[
          {
            value: 1,
            label: '1 min',
          },
          {
            value: 30,
            label: '30 min',
          },
          {
            value: 60,
            label: '60 min',
          },
        ]}
        onChange={handleChangeFrequency}
        onChangeCommitted={handleCommitFrequency}
      />
      <AppCheckbox
        label="Enable Autosave"
        value={autosaveEnabled}
        onChange={handleChangeAutosave}
      />
    </Box>
  );
}
