import React from 'react';
import { Box, BoxProps } from '@mui/material';

declare type AppTabPanelProps = BoxProps & {
  index: number;
  currentValue: number;
  children: React.ReactNode;
};

export function AppTabPanel({
  children,
  currentValue,
  index,
  ...otherProps
}: AppTabPanelProps) {
  if (currentValue !== index) return <></>;
  return (
    <Box sx={{ p: 3 }} {...otherProps}>
      {children}
    </Box>
  );
}
