import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { usePlayerSlice } from '../Player/slice';
import useGameLoop from './useGameLoop';
import { EngineInfo } from './EngineInfo';
interface EngineProps {
  children: React.ReactNode;
}

export function Engine({ children }: EngineProps) {
  const { actions: playerActions } = usePlayerSlice();
  const dispatch = useDispatch();

  const handleProcessing = useMemo(() => {
    const handler = (deltaMs: number) => {
      console.log(`Delta: ${deltaMs}`);
      dispatch(playerActions.incrementProcessingDeltaMs(deltaMs));
    };
    return handler;
  }, [dispatch, playerActions]);

  const timings = useGameLoop(handleProcessing, 5000);
  return (
    <>
      <EngineInfo timings={timings} />
      <br />
      {children}
    </>
  );
}
