import { lazyLoad } from 'app/common/loadable';

export const GroundControlPage = lazyLoad(
  () => import('./index'),
  module => module.GroundControlPage,
);
