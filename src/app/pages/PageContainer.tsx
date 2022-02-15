import React from 'react';
import { Box } from '@mui/material';

type PageContainerProps = {
  children: React.ReactNode;
  noPadding?: boolean;
};

export default function PageContainer({
  children,
  noPadding = false,
}: PageContainerProps) {
  return (
    <Box component="main" sx={{ flexGrow: 1, minHeight: '100vh' }}>
      <Box sx={{ p: noPadding ? 0 : 2, height: '100%' }}>{children}</Box>
    </Box>
  );
}
