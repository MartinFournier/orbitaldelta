import React from 'react';
import { Typography } from '@mui/material';
import { useAppSelector } from 'store/hooks';
import { formatDate, getTimeParts, isNight } from 'utilities/formatting';
import {
  selectCurrentSpeed,
  selectCurrentTime,
  selectIsPaused,
} from './slice/selectors';
import styled, { css } from 'styled-components';

import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import Brightness7OutlinedIcon from '@mui/icons-material/Brightness7Outlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Brightness4Icon from '@mui/icons-material/Brightness4';

export function DisplayDateTime() {
  const currentTime = useAppSelector(selectCurrentTime);
  const isPaused = useAppSelector(selectIsPaused);
  const currentSpeed = useAppSelector(selectCurrentSpeed);
  if (!currentTime) return <></>;

  const nightTime = isNight(currentTime);
  let CurrentIcon = nightTime ? DayIcon : NightIcon;
  let { hours, minutes, seconds } = getTimeParts(currentTime);
  if (currentSpeed.speed > 1000) {
    seconds = 0;
  }
  if (currentSpeed.speed > 10_000) {
    minutes = 0;
  }
  if (currentSpeed.speed > 50_000) {
    CurrentIcon = TimeIcon;
  }
  if (currentSpeed.speed > 100_000) {
    hours = 0;
  }
  return (
    <GameTime variant="code" id="app-current-time" $isPaused={isPaused}>
      <DateIcon sx={{ mr: 1 }} />
      {formatDate(currentTime)} {hours.toString().padStart(2, '0')}:
      {minutes.toString().padStart(2, '0')}:
      {seconds.toString().padStart(2, '0')}
      <CurrentIcon sx={{ ml: 1 }} />
    </GameTime>
  );
}

const GameTime = styled(Typography)<{ $isPaused: boolean }>`
  font-size: 14px;
  padding: ${props => `${props.theme.spacing(1)} ${props.theme.spacing(2)}`};
  margin-left: ${props => props.theme.spacing(2)};
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
const TimeIcon = styled(Brightness4Icon)`
  ${StyledIcon}
`;
