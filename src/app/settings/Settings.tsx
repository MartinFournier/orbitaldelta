import { Box, Tabs, Tab } from '@mui/material';
import { AppTabPanel } from 'app/common/AppTabPanel';
import React from 'react';
import AutosaveSlider from './Autosave';
import { ShowEngineStats } from './ShowEngineStats';

export function Settings() {
  const [value, setValue] = React.useState(0);

  return (
    <Box>
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab label="Gameplay" />
          <Tab label="Hotkeys" />
          <Tab label="Debug" />
        </Tabs>
      </Box>
      <AppTabPanel currentValue={value} index={0}>
        <AutosaveSlider />
      </AppTabPanel>
      <AppTabPanel currentValue={value} index={1}>
        Hotkeys here
      </AppTabPanel>
      <AppTabPanel currentValue={value} index={2}>
        <ShowEngineStats />
      </AppTabPanel>
    </Box>
  );
}
