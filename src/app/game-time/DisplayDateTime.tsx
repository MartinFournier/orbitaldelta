import React from 'react';
import { useAppSelector } from 'store/hooks';
import { formatDateTime } from 'utilities/formatting';
import { selectCurrentTime } from './slice/selectors';

export function DisplayDateTime() {
  // const dispatch = useAppDispatch();
  const currentTime = useAppSelector(selectCurrentTime);
  if (!currentTime) return <></>;
  const display = formatDateTime(currentTime);
  return <>{display}</>;
}
