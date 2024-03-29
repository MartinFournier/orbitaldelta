import React from 'react';

import PublicIcon from '@mui/icons-material/Public';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import RocketIcon from '@mui/icons-material/Rocket';
import LocationCityIcon from '@mui/icons-material/LocationCity';

export declare type AppPage = {
  title: string;
  category?: AppPageCategoryKey;
  description?: string;
  route: string;
  icon?: React.ReactNode;
};

export declare type AppPageCategory = {
  title: string;
};

export declare type AppPageCategoryKey = 'main' | 'misc' | 'dev';
const pageCategories: { [key: string]: AppPageCategory } = {
  main: {
    title: 'Main',
  },
  misc: {
    title: 'Misc',
  },
  dev: {
    title: 'Dev',
  },
};

const pages: { [key: string]: AppPage } = {
  missionControl: {
    title: 'Mission Control',
    route: '/',
    category: 'main',
    icon: <AssessmentOutlinedIcon />,
  },
  vehiculeAssembly: {
    title: 'Vehicule Assembly',
    route: '/vehicule-assembly',
    category: 'main',
    icon: <LocationCityIcon />,
  },
  groundControl: {
    title: 'Ground Control',
    route: '/ground-control',
    category: 'main',
    icon: <RocketIcon />,
  },
  orbital: {
    title: 'Orbital View',
    route: '/orbital',
    category: 'main',
    icon: <PublicIcon />,
  },
  settings: {
    title: 'Settings',
    route: '/settings',
    category: 'misc',
    icon: <SettingsIcon />,
  },
  about: {
    title: 'About',
    route: '/about',
    category: 'misc',
    icon: <InfoIcon />,
  },
  dev: {
    title: 'Dev',
    description: 'Dev Tools',
    route: '/dev',
    category: 'dev',
    icon: <LogoDevIcon />,
  },
  loading: {
    title: 'Loading',
    route: '/loading',
    category: 'dev',
    icon: <LogoDevIcon />,
  },
  notFound: {
    title: '404: Page Not Found',
    description: 'Page not found',
    route: '/404',
    category: 'dev',
    icon: <LogoDevIcon />,
  },
};

export const allPages = Object.entries(pages);

const pagesByCategory = [
  {
    category: pageCategories.main,
    pages: allPages.filter(([key, p]) => p.category === 'main'),
  },
  {
    category: pageCategories.misc,
    pages: allPages.filter(([key, p]) => p.category === 'misc'),
  },
];

if (process.env.NODE_ENV !== 'production') {
  pagesByCategory.push({
    category: pageCategories.misc,
    pages: allPages.filter(([key, p]) => p.category === 'dev'),
  });
}

export { pagesByCategory };

export default pages;
