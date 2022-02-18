import React from 'react';
import styled from 'styled-components';
import { IconButton, Tooltip } from '@mui/material';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { useAppDispatch, useAppSelector } from 'store/hooks';

import { selectIsPaused } from './slice/selectors';
import { gameTimeActions } from './slice';

export default function TogglePauseButton() {
  const dispatch = useAppDispatch();
  const isPaused = useAppSelector(selectIsPaused);

  const handleChangePause = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isPaused) {
      dispatch(gameTimeActions.unpauseGame());
    } else {
      dispatch(gameTimeActions.pauseGame());
    }
  };

  const pauseLabel = isPaused ? 'Unpause Game' : 'Pause Game';
  const CurrentIcon = isPaused ? PlayArrowIcon : PauseIcon;
  const PauseButton = (
    <Tooltip title={pauseLabel}>
      <StyledPauseButton
        size="small"
        aria-label={pauseLabel}
        color={isPaused ? 'secondary' : 'primary'}
        onClick={handleChangePause}
      >
        <CurrentIcon />
      </StyledPauseButton>
    </Tooltip>
  );

  return PauseButton;
}

const StyledPauseButton = styled(IconButton)`
  outline: 1px solid;
  outline-offset: -1px;
  margin: 0 ${props => props.theme.spacing(2)};
`;
