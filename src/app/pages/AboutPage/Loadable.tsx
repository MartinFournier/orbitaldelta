import { lazyLoad } from 'app/common/loadable';

export const AboutPage = lazyLoad(
  () => import('./index'),
  module => module.AboutPage,
);
