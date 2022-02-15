import React from 'react';
import { SnackbarProvider } from 'notistack';
import styled from 'styled-components';

const Snackbar = styled(SnackbarProvider)`
  &.SnackbarItem-variantSuccess {
    background-color: ${props => props.theme.palette.success.main};
  }
  &.SnackbarItem-variantInfo {
    background-color: ${props => props.theme.palette.info.main};
  }
  &.SnackbarItem-variantError {
    background-color: ${props => props.theme.palette.error.main};
  }
  &.SnackbarItem-variantWarning {
    background-color: ${props => props.theme.palette.warning.main};
  }
  &.SnackbarItem-action {
    &.MuiButton-root {
      color: '#000' !important;
    }
  }
`;

export function StyledSnackbarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Snackbar
      maxSnack={5}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {children}
    </Snackbar>
  );
}
