import React, { useState } from 'react';

import { Button, Tooltip } from '@mui/material';
import { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import { usePersistor } from './usePersistor';
import { sleep } from 'utilities/dev';
import { notifications } from 'app/common/Toasts';

export function DeleteSaveGameButton(props: MuiButtonProps) {
  const persistor = usePersistor();
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);

  const onButtonClick = async () => {
    if (!persistor) return;
    setIsDeleting(true);
    await persistor.purge();
    await persistor.flush();
    await sleep(250);
    setIsDeleting(false);
    navigate('/');
    notifications.deletedGameSave();
  };
  return (
    <Tooltip title={<span>Delete game data</span>}>
      <span>
        <Button
          variant="contained"
          disabled={isDeleting}
          startIcon={<DeleteForeverIcon />}
          onClick={onButtonClick}
          {...props}
        >
          {isDeleting && (
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
          <span>Delete</span>
        </Button>
      </span>
    </Tooltip>
  );
}
