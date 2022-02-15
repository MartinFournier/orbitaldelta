import React from 'react';
import { Box } from '@mui/material';

declare type AppTabPanelProps = {
  index: number;
  currentValue: number;
  children: React.ReactNode;
};

export function AppTabPanel({
  children,
  currentValue,
  index,
}: AppTabPanelProps) {
  if (currentValue !== index) return <></>;
  return <Box sx={{ p: 3 }}>{children}</Box>;
}
