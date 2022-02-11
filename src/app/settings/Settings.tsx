import { Box } from '@mui/material';
import React from 'react';
import AutosaveSlider from './Autosave';
import { ShowEngineStats } from './ShowEngineStats';

export function Settings() {
  return (
    <Box sx={{ p: 4 }}>
      <AutosaveSlider />
      <ShowEngineStats />
    </Box>
  );
}
