import * as React from 'react';
import { Button } from '@mui/material';
import toastActions from 'app/common/Toasts';
import { TypographyDemo } from './TypographyDemo';
import { GameTime } from './GameTime';
import { ContentTabbed, TabbedData } from 'app/common/ContentTabbed';

export function DeveloperTools() {
  const handleClick = () => {
    toastActions.info('Information!', { autoHideDuration: 30_000 });
    toastActions.success('Success!', { autoHideDuration: 30_000 });
    toastActions.error('Error!', { autoHideDuration: 30_000 });
    toastActions.warning('Warning!', { autoHideDuration: 30_000 });
    toastActions.toast('Toast!', { autoHideDuration: 30_000 });
  };

  const misc = (
    <Button variant="outlined" onClick={handleClick}>
      Toasts
    </Button>
  );

  const tabs: TabbedData[] = [
    { id: 'dev-gametime', label: 'Game Time', content: <GameTime /> },
    { id: 'dev-misc', label: 'Misc', content: misc },
    { id: 'dev-typography', label: 'Typography', content: <TypographyDemo /> },
  ];

  return <ContentTabbed tabs={tabs} />;
}
