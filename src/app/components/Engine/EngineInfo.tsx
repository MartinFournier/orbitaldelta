import React, { useMemo, useState, useEffect } from 'react';
import throttle from 'lodash/throttle';
import { Timings } from './useGameLoop';

interface EngineInfoProps {
  timings: Timings;
}

const maxRefresh = 50;

export function EngineInfo({ timings }: EngineInfoProps) {
  const [engineTimings, setEngineTimings] = useState<Timings | undefined>(timings);

  const throttledTimings = useMemo(
    () => throttle((newTimings: Timings) => setEngineTimings(newTimings), maxRefresh),
    [],
  );
  useEffect(() => throttledTimings(timings), [timings, throttledTimings]);

  if (!engineTimings) return <></>;
  return (
    <>
      Engine Load Time: {engineTimings.startedOn}
      <br />
      Current Frame Time: {engineTimings.currentFrameTime}
      <br />
      Previous Frame Time: {engineTimings.previousFrameTime}
      <br />
      FPS: {engineTimings.fps}
      <br />
      UPS: {engineTimings.ups}
    </>
  );
}
