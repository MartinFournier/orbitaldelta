import { lazyLoad } from 'app/common/loadable';

export const DevPage = lazyLoad(
  () => import('./index'),
  module => module.DevPage,
);
