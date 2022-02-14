import { Box, Tabs, Tab } from '@mui/material';
import React from 'react';
import AutosaveSlider from './Autosave';
import { ShowEngineStats } from './ShowEngineStats';

declare type TabPanelProps = {
  index: number;
  currentValue: number;
  children: React.ReactNode;
};

function TabPanel({ children, currentValue, index }: TabPanelProps) {
  if (currentValue !== index) return <></>;
  return <Box sx={{ p: 3 }}>{children}</Box>;
}

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
      <TabPanel currentValue={value} index={0}>
        <AutosaveSlider />
      </TabPanel>
      <TabPanel currentValue={value} index={1}>
        Hotkeys here
      </TabPanel>
      <TabPanel currentValue={value} index={2}>
        <ShowEngineStats />
      </TabPanel>
    </Box>
  );
}
