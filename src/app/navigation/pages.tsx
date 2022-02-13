import React from 'react';

import PublicIcon from '@mui/icons-material/Public';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';

export declare type AppPage = {
  title: string;
  category?: AppPageCategoryKey;
  description?: string;
  route?: string;
  icon?: React.ReactNode;
};

export declare type AppPageCategory = {
  title: string;
};

export declare type AppPageCategoryKey = 'main' | 'misc';
const pageCategories: { [key: string]: AppPageCategory } = {
  main: {
    title: 'Main',
  },
  misc: {
    title: 'Misc',
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
  notFound: {
    title: '404: Page Not Found',
    description: 'Page not found',
  },
};

export const allPages = Object.entries(pages);

export const pagesByCategory = [
  {
    category: pageCategories.main,
    pages: allPages.filter(([key, p]) => p.category === 'main'),
  },
  {
    category: pageCategories.misc,
    pages: allPages.filter(([key, p]) => p.category === 'misc'),
  },
];

export default pages;
