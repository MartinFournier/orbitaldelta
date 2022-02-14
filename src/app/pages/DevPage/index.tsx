import { Box, Button } from '@mui/material';
import { AppPageProps, Page } from '../Page';
import * as React from 'react';
import toastActions from 'app/common/Toasts';

export function DevPage(props: AppPageProps) {
  const handleClick = () => {
    toastActions.info('Information!', { autoHideDuration: 30_000 });
    toastActions.success('Success!', { autoHideDuration: 30_000 });
    toastActions.error('Error!', { autoHideDuration: 30_000 });
    toastActions.warning('Warning!', { autoHideDuration: 30_000 });
    toastActions.toast('Toast!', { autoHideDuration: 30_000 });
  };

  return (
    <Page {...props}>
      <Box>
        <Button onClick={handleClick}>Toasts</Button>
      </Box>
    </Page>
  );
}
