import { Box } from '@mui/material';
import { Page, AppPageProps } from '../Page';
import { SaveGameButton } from 'app/engine/SaveGameButton';
import { PlayerName } from 'app/player/PlayerName';
import * as React from 'react';
import { ContentMain } from 'app/common/ContentMain';
import { DeleteSaveGameButton } from 'app/engine/DeleteSaveGameButton';

export function MissionControlPage(props: AppPageProps) {
  return (
    <Page {...props}>
      <ContentMain>
        <Box>
          <PlayerName />
        </Box>
        <Box sx={{ my: 4 }}>
          <SaveGameButton size="large" sx={{ mr: 1 }} />
          <DeleteSaveGameButton size="large" color="error" variant="outlined" />
        </Box>
      </ContentMain>
    </Page>
  );
}
