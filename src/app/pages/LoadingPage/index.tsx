import { Box, LinearProgress } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';
import { AppPageProps, Page } from '../Page';

export function LoadingPage(props: AppPageProps) {
  return (
    <Page noSidebar basic {...props}>
      <Wrapper>
        <Title>Loading...</Title>
        <Box sx={{ width: '400px', mt: 2 }}>
          <LinearProgress />
        </Box>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;

const Title = styled.div`
  margin-top: -8vh;
  font-weight: bold;
  color: black;
  font-size: 3.375rem;

  span {
    font-size: 3.125rem;
  }
`;
