import * as React from 'react';
import { Button } from '@mui/material';
import toastActions from 'app/common/Toasts';
import { TypographyDemo } from './TypographyDemo';
import { TabbedContent, TabbedData } from 'app/common/TabbedContent';

export function DeveloperTools() {
  const handleClick = () => {
    toastActions.info('Information!', { autoHideDuration: 30_000 });
    toastActions.success('Success!', { autoHideDuration: 30_000 });
    toastActions.error('Error!', { autoHideDuration: 30_000 });
    toastActions.warning('Warning!', { autoHideDuration: 30_000 });
    toastActions.toast('Toast!', { autoHideDuration: 30_000 });
  };

  const actions = (
    <Button variant="outlined" onClick={handleClick}>
      Toasts
    </Button>
  );

  const typography = <TypographyDemo />;
  const tabs: TabbedData[] = [
    { id: 'dev-actions', label: 'Actions', content: actions },
    { id: 'dev-typography', label: 'Typography', content: typography },
  ];

  return <TabbedContent tabs={tabs} />;
}
