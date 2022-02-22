import React, { useState } from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import {
  Button,
  ButtonGroup,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Tooltip,
} from '@mui/material';

export type DevAdjusterProps = {
  keyId: string;
  label: string;
  defaultIncrement: number;
  bigValueMultiplier?: number;
  incrementFn: (value: number) => void;
  setValueFn?: (value: number) => void;
};

export function DevAdjuster(props: DevAdjusterProps) {
  const [value, setValue] = useState(props.defaultIncrement);

  const bigValue = () => value * (props.bigValueMultiplier ?? 10);
  const biggerValue = () => bigValue() * (props.bigValueMultiplier ?? 10);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) return;
    setValue(parseInt(e.target.value));
  };

  const handleIncrementClick = (currentValue: number) => () => {
    props.incrementFn(currentValue);
  };

  const handleSetValueClick = (currentValue: number) => () => {
    if (!props.setValueFn) return;
    props.setValueFn(0);
  };

  return (
    <ButtonGroup size="small">
      <Tooltip title={props.setValueFn ? 'Remove all' : ''}>
        <Button
          variant="outlined"
          disabled={!props.setValueFn}
          onClick={handleSetValueClick(0)}
        >
          <ClearIcon />
        </Button>
      </Tooltip>
      <Tooltip title={`Remove ${bigValue()}`}>
        <Button
          variant="outlined"
          onClick={handleIncrementClick(bigValue() * -1)}
        >
          <KeyboardDoubleArrowDownIcon />
        </Button>
      </Tooltip>
      <Tooltip title={`Remove ${value}`}>
        <Button variant="outlined" onClick={handleIncrementClick(value * -1)}>
          <RemoveIcon />
        </Button>
      </Tooltip>
      <FormControl variant="outlined">
        <InputLabel htmlFor={`dev-adjuster-${props.keyId}`}>
          {props.label}
        </InputLabel>
        <OutlinedInput
          id={`dev-adjuster-${props.keyId}`}
          sx={{ borderRadius: 0 }}
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          onChange={handleChange}
          value={value}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="reset to default"
                onClick={() => setValue(props.defaultIncrement)}
                edge="end"
              >
                <DeleteOutlineIcon />
              </IconButton>
            </InputAdornment>
          }
          label={props.label}
        />
      </FormControl>
      <Tooltip title={`Add ${value}`}>
        <Button variant="outlined" onClick={handleIncrementClick(value)}>
          <AddIcon />
        </Button>
      </Tooltip>
      <Tooltip title={`Add ${bigValue()}`}>
        <Button variant="outlined" onClick={handleIncrementClick(bigValue())}>
          <KeyboardDoubleArrowUpIcon />
        </Button>
      </Tooltip>
      <Tooltip title={`Add ${biggerValue()}`}>
        <Button
          variant="outlined"
          onClick={handleIncrementClick(biggerValue())}
        >
          <AllInclusiveIcon />
        </Button>
      </Tooltip>
    </ButtonGroup>
  );
}
