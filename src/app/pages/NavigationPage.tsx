import * as React from 'react';
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { pagesByCategory, AppPage, AppPageCategory } from '.';
import NavigationDrawer from './NavigationDrawer';
import { Tooltip } from '@mui/material';

declare type NavigationPageProps = {
  children: React.ReactNode;
};

function PageEntryInner({ pageItem }: { pageItem: AppPage }) {
  return (
    <>
      <ListItemIcon>{pageItem.icon}</ListItemIcon>
      <ListItemText primary={pageItem.title} />
    </>
  );
}

function PageEntry({
  pageKey,
  pageItem,
}: {
  pageKey: string;
  pageItem: AppPage;
}) {
  const resolved = useResolvedPath(pageItem.route ?? '');
  const match = useMatch({ path: resolved.pathname, end: true });

  if (!pageItem.route) {
    return (
      <ListItemButton>
        <PageEntryInner pageItem={pageItem} />
      </ListItemButton>
    );
  }

  return (
    <NavLink
      to={pageItem.route ?? '/'}
      key={`nav-${pageKey}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
      className={({ isActive }: { isActive: boolean }) =>
        isActive ? 'active' : ''
      }
    >
      <Tooltip
        title={pageItem.description ?? pageItem.title}
        placement="right"
        arrow
      >
        <ListItemButton selected={match !== null}>
          <PageEntryInner pageItem={pageItem} />
        </ListItemButton>
      </Tooltip>
    </NavLink>
  );
}

function PageCategoryEntry({
  category,
  pages,
}: {
  category: AppPageCategory;
  pages: [string, AppPage][];
}) {
  return (
    <List>
      {pages.map(([pageKey, pageItem]) => (
        <PageEntry
          key={`page-${pageKey}`}
          pageKey={pageKey}
          pageItem={pageItem}
        />
      ))}
    </List>
  );
}

export default function NavigationPage({ children }: NavigationPageProps) {
  const MenuItems = pagesByCategory
    .map((entry, i) => (
      <PageCategoryEntry
        key={`category-${i}`}
        category={entry.category}
        pages={entry.pages}
      />
    ))
    .reduce(
      (result, current, index) =>
        result.length === 0
          ? [current]
          : [...result, <Divider key={`divider-${index}`} />, current],
      [] as JSX.Element[],
    );

  return (
    <NavigationDrawer pageContent={children}>{MenuItems}</NavigationDrawer>
  );
}
