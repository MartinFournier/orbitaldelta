import React from 'react';
import { Box } from '@mui/material';
import { NavigationHotkeys } from 'app/hotkeys';

export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NavigationHotkeys>
      <Box component="main" sx={{ flexGrow: 1, minHeight: '100vh' }}>
        <Box sx={{ p: 2, height: '100%' }}>{children}</Box>
      </Box>
    </NavigationHotkeys>
  );
}
