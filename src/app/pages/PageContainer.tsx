import React from 'react';
import { Box } from '@mui/material';

export default function PageContainer({
  children,
  noPadding = false,
}: {
  children: React.ReactNode;
  noPadding?: boolean;
}) {
  return (
    <Box component="main" sx={{ flexGrow: 1, minHeight: '100vh' }}>
      <Box sx={{ p: noPadding ? 0 : 2, height: '100%' }}>{children}</Box>
    </Box>
  );
}
