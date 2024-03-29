import { lazyLoad } from 'app/common/loadable';

export const SettingsPage = lazyLoad(
  () => import('./index'),
  module => module.SettingsPage,
);
