import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import useGameLoop from './useGameLoop';
import { playerActions } from '../player/slice';
import { EngineInfo } from './EngineInfo';
import { useAppSelector } from 'store/hooks';
import { selectShowEngineStats } from './slice/selectors';

interface EngineProps {
  children: React.ReactNode;
}

export function Engine({ children }: EngineProps) {
  const dispatch = useDispatch();
  const showEngineStats = useAppSelector(selectShowEngineStats);
  const handleProcessing = useMemo(() => {
    const handler = (deltaMs: number) => {
      console.debug(`Engine Processing -> Delta: ${deltaMs.toFixed(2)}ms.`);
      dispatch(playerActions.incrementProcessingDeltaMs(deltaMs));
    };
    return handler;
  }, [dispatch]);

  const timings = useGameLoop(handleProcessing, 5000);
  return (
    <>
      {children}
      {showEngineStats && <EngineInfo timings={timings} />}
    </>
  );
}
