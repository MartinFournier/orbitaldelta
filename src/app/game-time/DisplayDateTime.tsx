import React from 'react';
import { Typography } from '@mui/material';
import { useAppSelector } from 'store/hooks';
import { formatDateTime } from 'utilities/formatting';
import { selectCurrentTime } from './slice/selectors';

export function DisplayDateTime() {
  const currentTime = useAppSelector(selectCurrentTime);
  if (!currentTime) return <></>;
  const display = formatDateTime(currentTime);
  return <Typography variant="code">{display}</Typography>;
}
