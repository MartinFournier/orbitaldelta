import { lazyLoad } from 'app/common/loadable';

export const HomePage = lazyLoad(
  () => import('./index'),
  module => module.SettingsPage,
);
