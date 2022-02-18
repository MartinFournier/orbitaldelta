import { Box } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { DisplayDateTime } from './DisplayDateTime';
import GameSpeedButtons from './GameSpeedButtons';

export function TopGameDisplay() {
  return (
    <Container id="app-game-time">
      <GameSpeedButtons />
      <DisplayDateTime />
    </Container>
  );
}

const Container = styled(Box)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
`;
