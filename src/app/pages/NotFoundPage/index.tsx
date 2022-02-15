import * as React from 'react';
import styled from 'styled-components';
import { AppPageProps } from '../Page';
import PageSplash from '../PageSplash';

export function NotFoundPage(props: AppPageProps) {
  const splashTitle = (
    <>
      4
      <span role="img" aria-label="Crying Face">
        😢
      </span>
      4
    </>
  );
  return (
    <PageSplash {...props} splashTitle={splashTitle}>
      <P>Page not found.</P>
    </PageSplash>
  );
}

const P = styled('p')`
  font-size: 1rem;
  line-height: 1.5;
  margin: 0.625rem 0 1.5rem 0;
`;
