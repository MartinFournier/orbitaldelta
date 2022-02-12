import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, Theme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Tooltip } from '@mui/material';
import { AppBuild } from 'app/engine/AppBuild';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectSidebarCollapsed } from 'app/settings/slice/selectors';
import { settingsActions } from 'app/settings/slice';

declare type AppDrawerProps = {
  children: React.ReactNode;
  pageContent: React.ReactNode;
};

const drawerWidth = 240;

const openedMixin = (theme: Theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer)(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function AppDrawer({ children, pageContent }: AppDrawerProps) {
  const dispatch = useAppDispatch();
  const sidebarCollapsed = useAppSelector(selectSidebarCollapsed);
  const [collapsed, setCollapsed] = React.useState(sidebarCollapsed);

  const handleToggle = () => {
    setCollapsed(!collapsed);
    dispatch(settingsActions.changeSidebarCollapsed(!collapsed));
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={!collapsed}>
        <List>
          <ListItem button onClick={handleToggle} key="header">
            <ListItemIcon>
              {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </ListItemIcon>
            <Tooltip
              title={<AppBuild noLink />}
              placement="right"
              leaveDelay={500}
              arrow
            >
              <ListItemText primary="Orbital Delta" />
            </Tooltip>
          </ListItem>
        </List>
        <Divider />
        {children}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, minHeight: '100vh' }}>
        <Box sx={{ p: 2 }}>{pageContent}</Box>
      </Box>
    </Box>
  );
}
