import { Box, Link } from '@mui/material';
import { SaveGameButton } from 'app/engine/SaveGameButton';
import { PlayerName } from 'app/player/PlayerName';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import buildInfo from 'utilities/buildInfo';

declare type HomeProps = {
  saveFn: () => Promise<unknown>;
};

export function HomePage({ saveFn }: HomeProps) {
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
        <SaveGameButton saveFn={saveFn} />
      </Box>
      <Link href="/settings">Settings</Link>
    </>
  );
}
