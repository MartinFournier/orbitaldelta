import React from 'react';

import { Button, Tooltip } from '@mui/material';
import { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import CircularProgress from '@mui/material/CircularProgress';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectGameSavedOn, selectIsGameSaving } from './slice/selectors';
import { saveGame } from './slice';

interface ButtonProps extends MuiButtonProps {
  saveFn: () => Promise<unknown>;
}

export function SaveGameButton({ saveFn: flush }: ButtonProps) {
  const dispatch = useAppDispatch();
  const savedOn = useAppSelector(selectGameSavedOn);
  const isSaving = useAppSelector(selectIsGameSaving);
  const onButtonClick = async () => {
    dispatch(saveGame(flush));
  };
  return (
    <Tooltip title={<span>Saved on: {savedOn}</span>}>
      <span>
        <Button disabled={isSaving} startIcon={<SaveIcon />} onClick={onButtonClick}>
          {isSaving && (
            <CircularProgress
              size={24}
              sx={{ position: 'absolute', top: '50%', left: '50%', marginTop: '-12px', marginLeft: '-12px' }}
            />
          )}
          <span>Save</span>
        </Button>
      </span>
    </Tooltip>
  );
}
