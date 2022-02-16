import { lazyLoad } from 'app/common/loadable';

export const VehiculeAssemblyPage = lazyLoad(
  () => import('./index'),
  module => module.VehiculeAssemblyPage,
);
