import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import useGameLoop from './useGameLoop';
import { playerActions } from '../Player/slice';
import { EngineInfo } from './EngineInfo';
import log from 'utils/logger';

interface EngineProps {
  children: React.ReactNode;
}

export function Engine({ children }: EngineProps) {
  const dispatch = useDispatch();

  const handleProcessing = useMemo(() => {
    const handler = (deltaMs: number) => {
      log.debug(`Engine Processing -> Delta: ${deltaMs.toFixed(2)}ms.`);
      dispatch(playerActions.incrementProcessingDeltaMs(deltaMs));
    };
    return handler;
  }, [dispatch]);

  const timings = useGameLoop(handleProcessing, 5000);
  return (
    <>
      <EngineInfo timings={timings} />
      <br />
      {children}
    </>
  );
}
