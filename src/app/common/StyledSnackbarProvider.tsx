import React from 'react';
import { SnackbarProvider } from 'notistack';
import styled from 'styled-components';

const Snackbar = styled(SnackbarProvider)`
  &.SnackbarItem-variantSuccess,
  &.SnackbarItem-variantInfo,
  &.SnackbarItem-variantError,
  &.SnackbarItem-variantWarning {
    color: ${props => props.theme.palette.primary.contrastText};

    .MuiSvgIcon-root {
      color: ${props => props.theme.palette.primary.contrastText};
    }
  }

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
