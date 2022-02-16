import * as React from 'react';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
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
import styled, { css } from 'styled-components';

declare type AppDrawerProps = {
  children: React.ReactNode;
  pageContent: React.ReactNode;
};

const drawerWidth = 240;

const openedMixin = css`
  width: ${drawerWidth}px;
  transition: ${props =>
    props.theme.transitions.create('width', {
      easing: props.theme.transitions.easing.sharp,
      duration: props.theme.transitions.duration.enteringScreen,
    })};
  overflow-x: hidden;
`;

const closedMixin = css`
  transition: ${props =>
    props.theme.transitions.create('width', {
      easing: props.theme.transitions.easing.sharp,
      duration: props.theme.transitions.duration.leavingScreen,
    })};
  overflow-x: hidden;
  width: calc(${props => props.theme.spacing(7)} + 1px);
`;

const toggleMixin = (opened: boolean) => (opened ? openedMixin : closedMixin);

const Drawer = styled(MuiDrawer)<{ open: boolean }>`
  width: ${drawerWidth}px;
  flex-shrink: 0;
  white-space: nowrap;
  box-sizing: border-box;
  ${props => toggleMixin(props.open)}

  .MuiDrawer-paper {
    ${props => toggleMixin(props.open)}
  }

  .MuiListItemButton-root.Mui-selected {
    border-left: 4px solid ${props => props.theme.palette.secondary.main};

    .MuiListItemIcon-root {
      margin-left: -4px;
    }
  }
`;

const AppTitleItem = styled(ListItemText)`
  & .MuiTypography-root {
    font-weight: 700;
  }
`;

export default function NavigationDrawer({
  children,
  pageContent,
}: AppDrawerProps) {
  const dispatch = useAppDispatch();
  const sidebarCollapsed = useAppSelector(selectSidebarCollapsed);
  const [collapsed, setCollapsed] = React.useState(sidebarCollapsed);

  const handleToggle = () => {
    setCollapsed(!collapsed);
    dispatch(settingsActions.changeSidebarCollapsed(!collapsed));
  };

  return (
    <Box id="app" sx={{ display: 'flex' }}>
      <Drawer id="app-navigation" variant="permanent" open={!collapsed}>
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
              <AppTitleItem primary="Orbital Δ" />
            </Tooltip>
          </ListItem>
        </List>
        <Divider />
        {children}
      </Drawer>
      {pageContent}
    </Box>
  );
}
