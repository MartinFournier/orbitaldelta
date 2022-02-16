import { lazyLoad } from 'app/common/loadable';

export const MissionControlPage = lazyLoad(
  () => import('./index'),
  module => module.MissionControlPage,
);
