import * as React from 'react';
import { Page, AppPageProps } from '../Page';
import { VehiculeAssembly } from 'app/assembly/VehiculeAssembly';

export function VehiculeAssemblyPage(props: AppPageProps) {
  return (
    <Page {...props} noPadding>
      <VehiculeAssembly />
    </Page>
  );
}
