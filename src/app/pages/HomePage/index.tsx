import { Box } from '@mui/material';
import { AppLink } from 'app/common/AppLink';
import { AppBuild } from 'app/engine/AppBuild';
import { SaveGameButton } from 'app/engine/SaveGameButton';
import { PlayerName } from 'app/player/PlayerName';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

declare type HomeProps = {
  saveFn: () => Promise<unknown>;
};

export function HomePage({ saveFn }: HomeProps) {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
      </Helmet>
      <Box>
        <span>
          Home Page - <AppBuild />
        </span>
      </Box>
      <Box>
        <PlayerName />
        <SaveGameButton saveFn={saveFn} />
      </Box>
      <AppLink to="/settings">Settings</AppLink>
    </>
  );
}
