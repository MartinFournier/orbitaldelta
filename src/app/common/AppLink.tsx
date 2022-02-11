import * as React from 'react';
import { Link, LinkProps } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

type x = Omit<LinkProps, 'component'>;

interface AppLinkProps extends x {
  to: string;
  children: React.ReactNode;
}

export function AppLink({ children, to, ...otherProps }: AppLinkProps) {
  return (
    <Link to={to} component={RouterLink} {...otherProps}>
      <>{children}</>
    </Link>
  );
}
