import * as React from 'react';
import { Box, styled } from '@mui/material';

export type ContentMainProps = {
  children: React.ReactNode;
};

export function ContentMain({ children }: ContentMainProps) {
  return (
    <AppPageWrapper id="app-page">
      <AppPageContent id="app-page-content">{children}</AppPageContent>
    </AppPageWrapper>
  );
}

const AppPageWrapper = styled(Box)`
  flex: 1;
  flex-direction: column;
  display: flex;
`;

const AppPageContent = styled(Box)`
  overflow-y: auto;
  height: 100px;
  flex: 1 1 auto;
  padding: ${props => props.theme.spacing(2)};
`;
