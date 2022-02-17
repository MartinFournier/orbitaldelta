import React from 'react';

import { Button, Tooltip } from '@mui/material';
import { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import CircularProgress from '@mui/material/CircularProgress';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectGameSavedOn, selectIsGameSaving } from './slice/selectors';
import { saveGame } from './slice';
import { notifications } from 'app/common/Toasts';
import { usePersistor } from './usePersistor';

export function SaveGameButton({ ...buttonProps }: MuiButtonProps) {
  const persistor = usePersistor();
  const dispatch = useAppDispatch();
  const savedOn = useAppSelector(selectGameSavedOn);
  const isSaving = useAppSelector(selectIsGameSaving);

  const onButtonClick = async () => {
    if (!persistor) return;
    await dispatch(saveGame(persistor.flush));
    notifications.gameSaved();
  };

  return (
    <Tooltip title={<span>Last saved on: {savedOn}</span>}>
      <span>
        <Button
          variant="contained"
          disabled={isSaving}
          startIcon={<SaveIcon />}
          onClick={onButtonClick}
          {...buttonProps}
        >
          {isSaving && (
            <CircularProgress
              size={24}
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-12px',
                marginLeft: '-12px',
              }}
            />
          )}
          <span>Save</span>
        </Button>
      </span>
    </Tooltip>
  );
}
