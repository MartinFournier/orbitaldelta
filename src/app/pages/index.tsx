import React from 'react';

import PublicIcon from '@mui/icons-material/Public';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import LogoDevIcon from '@mui/icons-material/LogoDev';

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
  main: {
    title: 'Main',
    route: '/',
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
