import React from 'react';
import styled from 'styled-components';
import { CircularProgress, IconButton, Tooltip } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';

import { useAppDispatch, useAppSelector } from 'store/hooks';

import { selectTurbo } from './slice/selectors';
import { gameTimeActions } from './slice';

export default function ToggleTurboButton() {
  const dispatch = useAppDispatch();
  const turbo = useAppSelector(selectTurbo);

  const handleChangePause = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(gameTimeActions.toggleTurbo());
  };

  const label = turbo.isTurboing ? 'Disable Turbo' : 'Enable Turbo';
  const TurboButton = (
    <Tooltip title={label}>
      <StyledTurboButton
        size="small"
        aria-label={label}
        color={turbo.isTurboing ? 'warning' : 'primary'}
        onClick={handleChangePause}
      >
        <SpeedIcon />
        <CircularProgress
          variant="determinate"
          color={turbo.isTurboing ? 'warning' : 'primary'}
          value={25}
          sx={{ position: 'absolute' }}
        />
      </StyledTurboButton>
    </Tooltip>
  );

  return TurboButton;
}

const StyledTurboButton = styled(IconButton)`
  outline: 1px solid;
  outline-offset: -1px;
  margin-right: ${props => props.theme.spacing(2)};
`;
