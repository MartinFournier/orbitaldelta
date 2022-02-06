import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { usePlayerSlice } from '../Player/slice';
import useGameLoop from './useGameLoop';

interface EngineProps {
  children: React.ReactNode;
}

export function Engine({ children }: EngineProps) {
  const { actions: playerActions } = usePlayerSlice();
  const dispatch = useDispatch();
  const processing = useMemo(() => {
    return (deltaMs: number) => {
      console.log(`Delta: ${deltaMs}`);
      dispatch(playerActions.incrementProcessingDeltaMs(deltaMs));
    };
  }, [dispatch, playerActions]);
  const timings = useGameLoop(processing, 5000);

  return (
    <>
      Engine Loaded On: {timings.startedOn}
      <br />
      Current Frame Time: {timings.currentFrameTime}
      <br />
      Previous Frame Time: {timings.previousFrameTime}
      <br />
      FPS: {timings.fps}
      <br />
      UPS: {timings.ups}
      <br />
      <br />
      {children}
    </>
  );
}
