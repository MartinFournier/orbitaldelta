import { Link, Tooltip } from '@mui/material';
import * as React from 'react';
import buildInfo from 'utilities/buildInfo';

const baseUrl = 'https://github.com/MartinFournier/orbitaltarget/commit';

const shortFormatter = new Intl.DateTimeFormat('en-GB', { month: '2-digit', day: '2-digit', year: 'numeric' });
const detailedFormatter = new Intl.DateTimeFormat('en-GB', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: false,
});

export function AppBuild() {
  const date = new Date(buildInfo.time);
  return (
    <>
      v{buildInfo.version} (
      <Link href={`${baseUrl}/${buildInfo.commit}`} target="_blank">
        {buildInfo.commit}
      </Link>
      ){' '}
      <Tooltip title={<>Built On: {detailedFormatter.format(date)}</>}>
        <span>{shortFormatter.format(date)}</span>
      </Tooltip>
    </>
  );
}
