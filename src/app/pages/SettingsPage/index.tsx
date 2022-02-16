import * as React from 'react';
import { Page, AppPageProps } from '../Page';
import { Settings } from 'app/settings/Settings';

export function SettingsPage(props: AppPageProps) {
  return (
    <Page {...props} noPadding>
      <Settings />
    </Page>
  );
}
