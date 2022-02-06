import { Box } from '@mui/material';
import { PlayerName } from 'app/components/Player/PlayerName';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import buildInfo from 'utils/buildInfo';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Box>
        <span>
          My HomePage - {buildInfo.version} ({buildInfo.commit}) - {new Date(buildInfo.time).toISOString()}
        </span>
      </Box>
      <Box>
        <PlayerName />
      </Box>
    </>
  );
}
