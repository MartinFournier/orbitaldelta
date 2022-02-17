import { Link, Tooltip } from '@mui/material';
import * as React from 'react';
import buildInfo from 'utilities/buildInfo';
import { formatDateTime, formatDate } from 'utilities/formatting';

const baseUrl = 'https://github.com/MartinFournier/orbitaltarget/commit';

export function AppBuild({ noLink = false }: { noLink?: boolean }) {
  const date = new Date(buildInfo.time);
  const displayDate = formatDate(date);
  const displayDateDetailed = formatDateTime(date);
  return (
    <>
      v{buildInfo.version} (
      {noLink ? (
        buildInfo.commit
      ) : (
        <Link
          href={`${baseUrl}/${buildInfo.commit}`}
          target="_blank"
          color="primary"
        >
          {buildInfo.commit}
        </Link>
      )}
      ){' '}
      <Tooltip title={<>Built On: {displayDateDetailed}</>}>
        <span>{displayDate}</span>
      </Tooltip>
    </>
  );
}
