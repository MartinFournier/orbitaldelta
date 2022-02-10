import { lazyLoad } from 'app/common/loadable';

export const NotFoundPage = lazyLoad(
  () => import('./index'),
  module => module.NotFoundPage,
);
