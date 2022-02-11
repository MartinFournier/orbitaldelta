import { AppCheckbox } from 'app/common/AppCheckbox';
import { engineAction } from 'app/engine/slice';
import { selectShowEngineStats } from 'app/engine/slice/selectors';
import * as React from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';

export function ShowEngineStats() {
  const dispatch = useAppDispatch();
  const showEngineStats = useAppSelector(selectShowEngineStats);

  const onChange = (
    evt: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => {
    dispatch(engineAction.changeShowEngineStats(checked));
  };

  return (
    <AppCheckbox
      label="Show Engine Stats"
      value={showEngineStats}
      onChange={onChange}
    />
  );
}
