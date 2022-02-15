import * as React from 'react';
import { AppPageProps, Page } from '../Page';

import { DeveloperTools } from 'app/dev/DeveloperTools';

export function DevPage(props: AppPageProps) {
  return (
    <Page noPadding {...props}>
      <DeveloperTools />
    </Page>
  );
}
