import { lazyLoad } from 'app/common/loadable';

export const LoadingPage = lazyLoad(
  () => import('./index'),
  module => module.LoadingPage,
);
