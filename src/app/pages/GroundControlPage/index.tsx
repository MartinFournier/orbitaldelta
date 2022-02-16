import { Page, AppPageProps } from '../Page';
import * as React from 'react';
import { ContentMain } from 'app/common/ContentMain';

export function GroundControlPage({ ...pageProps }: AppPageProps) {
  return (
    <Page {...pageProps}>
      <ContentMain>Lorem Ipsum</ContentMain>
    </Page>
  );
}
