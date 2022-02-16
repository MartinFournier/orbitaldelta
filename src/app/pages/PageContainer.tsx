import React from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';

type PageContainerProps = {
  children: React.ReactNode;
  noPadding?: boolean;
};

const Main = styled(Box)<{ noPadding: boolean }>`
  min-height: 100vh;
  flex: 1;

  & #app-inner {
    padding: ${props => (props.noPadding ? 0 : props.theme.spacing(2))};
    height: 100vh;
    display: flex;
  }
`;

export default function PageContainer({
  children,
  noPadding = false,
}: PageContainerProps) {
  return (
    <Main id="app-outer" component="main" noPadding={noPadding}>
      <Box id="app-inner">{children}</Box>
    </Main>
  );
}
