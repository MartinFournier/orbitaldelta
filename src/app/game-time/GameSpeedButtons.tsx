import React from 'react';
import { selectCurrentSpeed } from './slice/selectors';
import { gameTimeActions } from './slice';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { Button, ButtonGroup, IconButton, Tooltip } from '@mui/material';

import PauseIcon from '@mui/icons-material/Pause';
import styled from 'styled-components';
import { gameSpeeds } from '.';

export default function GameSpeedButtons() {
  const dispatch = useAppDispatch();
  const currentSpeed = useAppSelector(selectCurrentSpeed);

  const handleChangePause = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (currentSpeed.isPaused) {
      dispatch(gameTimeActions.unpauseGame());
    } else {
      dispatch(gameTimeActions.pauseGame());
    }
  };

  const setSpeed = (newSpeed: number) => {
    dispatch(gameTimeActions.setSpeedMultiplier(newSpeed));
  };

  const pauseLabel = currentSpeed.isPaused ? 'Unpause Game' : 'Pause Game';
  const PauseButton = (
    <Tooltip title={pauseLabel}>
      <StyledPauseButton
        aria-label={pauseLabel}
        color={currentSpeed.isPaused ? 'secondary' : 'primary'}
        onClick={handleChangePause}
      >
        <PauseIcon />
      </StyledPauseButton>
    </Tooltip>
  );

  return (
    <>
      {PauseButton}

      <StyledButtonGroup
        aria-label="Speed Button Group"
        size="large"
        sx={{ alignSelf: 'flex-end' }}
      >
        {gameSpeeds.map(speed => (
          <Tooltip
            key={`speed-button-x${speed}`}
            title={`Modify Time Flow to x${speed}`}
          >
            <Button
              color={
                currentSpeed.speed === speed && currentSpeed.isPaused
                  ? 'secondary'
                  : 'primary'
              }
              variant={
                currentSpeed.speed === speed && !currentSpeed.isPaused
                  ? 'contained'
                  : 'outlined'
              }
              onClick={() => setSpeed(speed)}
            >
              x{speed}
            </Button>
          </Tooltip>
        ))}
      </StyledButtonGroup>
    </>
  );
}

const StyledButtonGroup = styled(ButtonGroup)`
  margin: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(2)};
  align-self: 'flex-end';

  .MuiButtonGroup-grouped:not(:last-of-type) {
    margin-right: 2px;
    border-right-color: initial;

    &.MuiButton-outlinedPrimary:not(:hover) {
      border-right-color: ${props => props.theme.palette.primary.dark};
    }

    &.MuiButton-outlinedSecondary:not(:hover) {
      border-right-color: ${props => props.theme.palette.secondary.dark};
    }
  }
`;

const StyledPauseButton = styled(IconButton)`
  border: 1px solid;
  margin-right: ${props => props.theme.spacing(2)};
`;
