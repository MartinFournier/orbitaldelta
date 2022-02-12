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

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

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
  const [opened, setOpened] = React.useState(true);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={opened}>
        <List>
          <ListItem button onClick={() => setOpened(!opened)} key="header">
            <ListItemIcon>
              {opened ? <ChevronLeftIcon /> : <ChevronRightIcon />}
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
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {pageContent}
      </Box>
    </Box>
  );
}
