import React from 'react';
import styled from 'styled-components';
import { CircularProgress, IconButton, Tooltip } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
  selectTurbo,
  selectTurboAvailability,
  selectTurboTime,
} from './slice/selectors';
import { gameTimeActions } from './slice';
import { formatHumanDuration } from 'utilities/formatting';

export default function ToggleTurboButton() {
  const dispatch = useAppDispatch();
  const turbo = useAppSelector(selectTurbo);
  const turboAvailability = useAppSelector(selectTurboAvailability);
  const turboTime = useAppSelector(selectTurboTime);

  const handleChangePause = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(gameTimeActions.toggleTurbo());
  };

  const labelPrefix = turbo ? 'Disable Turbo' : 'Enable Turbo';
  const buttonTooltip = (
    <>
      {labelPrefix} ({formatHumanDuration(turboTime)})
    </>
  );
  const TurboButton = (
    <Tooltip title={buttonTooltip} arrow>
      <StyledTurboButton
        size="small"
        aria-label={labelPrefix}
        color={turbo ? 'warning' : 'primary'}
        onClick={handleChangePause}
      >
        <SpeedIcon />
        <StyledCircular
          variant="determinate"
          color={turbo ? 'warning' : 'primary'}
          value={turboAvailability}
          size="41px"
        />
      </StyledTurboButton>
    </Tooltip>
  );

  return TurboButton;
}

const StyledCircular = styled(CircularProgress)`
  position: absolute;
  left: -5px;
`;

const StyledTurboButton = styled(IconButton)`
  outline: 1px solid;
  outline-offset: -1px;
  margin-right: ${props => props.theme.spacing(2)};
`;
