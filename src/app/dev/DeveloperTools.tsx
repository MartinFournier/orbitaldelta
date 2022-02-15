import * as React from 'react';
import { Box, Button, Tabs, Tab } from '@mui/material';
import toastActions from 'app/common/Toasts';
import { AppTabPanel } from 'app/common/AppTabPanel';
import { TypographyDemo } from './TypographyDemo';

export function DeveloperTools() {
  const [value, setValue] = React.useState(0);

  const handleClick = () => {
    toastActions.info('Information!', { autoHideDuration: 30_000 });
    toastActions.success('Success!', { autoHideDuration: 30_000 });
    toastActions.error('Error!', { autoHideDuration: 30_000 });
    toastActions.warning('Warning!', { autoHideDuration: 30_000 });
    toastActions.toast('Toast!', { autoHideDuration: 30_000 });
  };

  return (
    <Box>
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab label="Actions" />
          <Tab label="Typography" />
          <Tab label="Buttons" />
        </Tabs>
      </Box>
      <AppTabPanel currentValue={value} index={0}>
        <Button variant="outlined" onClick={handleClick}>
          Toasts
        </Button>
      </AppTabPanel>
      <AppTabPanel currentValue={value} index={1}>
        <TypographyDemo />
      </AppTabPanel>
    </Box>
  );
}
