import { Checkbox, CheckboxProps, FormControlLabel } from '@mui/material';
import * as React from 'react';

interface AppCheckboxProps extends CheckboxProps {
  label: string;
}

export function AppCheckbox({ label, ...otherProps }: AppCheckboxProps) {
  return <FormControlLabel control={<Checkbox {...otherProps} />} label={label} />;
}
