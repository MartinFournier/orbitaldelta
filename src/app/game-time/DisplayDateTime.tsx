import React from 'react';
import { Typography } from '@mui/material';
import { useAppSelector } from 'store/hooks';
import { formatDate, formatTime, isNight } from 'utilities/formatting';
import { selectCurrentTime, selectIsPaused } from './slice/selectors';
import styled, { css } from 'styled-components';

import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import Brightness7OutlinedIcon from '@mui/icons-material/Brightness7Outlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

export function DisplayDateTime() {
  const currentTime = useAppSelector(selectCurrentTime);
  const isPaused = useAppSelector(selectIsPaused);
  if (!currentTime) return <></>;

  const nightTime = isNight(currentTime);
  const CurrentIcon = nightTime ? DayIcon : NightIcon;
  return (
    <GameTime variant="code" id="app-current-time" $isPaused={isPaused}>
      <DateIcon sx={{ mr: 1 }} />
      {formatDate(currentTime)} {formatTime(currentTime)}
      <CurrentIcon sx={{ ml: 1 }} />
    </GameTime>
  );
}

const GameTime = styled(Typography)<{ $isPaused: boolean }>`
  font-size: 14px;
  padding: ${props => `${props.theme.spacing(1)} ${props.theme.spacing(2)}`};
  margin-left: ${props => props.theme.spacing(2)};
  margin-right: ${props => props.theme.spacing(2)};
  background-color: ${props =>
    props.$isPaused ? 'transparent' : props.theme.palette.primary.light};
  color: ${props =>
    props.$isPaused
      ? props.theme.palette.primary.light
      : props.theme.palette.bg.contrastText};
  outline: ${props =>
    props.$isPaused
      ? `1px solid ${props.theme.palette.secondary.dark}`
      : 'none'};
  outline-offset: -1px;
  box-shadow: ${props => props.theme.shadows[2]};
  border-radius: 4px;
  display: block;
  margin-top: 2px;
`;

const StyledIcon = css`
  position: relative;
  top: -1px;
  /* color: ${props => props.theme.palette.bg.light}; */
`;

const DayIcon = styled(Brightness7OutlinedIcon)`
  ${StyledIcon}
`;
const NightIcon = styled(DarkModeOutlinedIcon)`
  ${StyledIcon}
`;
const DateIcon = styled(TodayOutlinedIcon)`
  ${StyledIcon}
`;
