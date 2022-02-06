import { useState, useEffect, useRef, useMemo } from 'react';
import throttle from 'lodash/throttle';

const usePrevious = (value: number) => {
  const ref = useRef<number>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const useGameLoop = (handleProcessing: (deltaMs: number) => void, throttleDelay: number) => {
  const [startedOn] = useState<number>(performance.now());
  const [currentFrameTime, setCurrentFrameTime] = useState<number>(0);
  const previousFrameTime = usePrevious(currentFrameTime);
  const [processedTime, setProcessedTime] = useState<number>(0);
  const previousProcessedTime = usePrevious(processedTime);
  const [frameHistory, setFrameHistory] = useState<number[]>([]);
  const [processingHistory, setProcessingHistory] = useState<number[]>([]);
  const [fps, setFps] = useState<number>(0);
  const [ups, setUps] = useState<number>(0);

  const throttledProcessing = useMemo(
    () =>
      throttle((frameTime: number, processedOn: number) => {
        const delta = frameTime - (processedOn ?? 0);
        setProcessedTime(frameTime);
        handleProcessing(delta);
      }, throttleDelay),
    [handleProcessing, throttleDelay],
  );

  useEffect(
    () => throttledProcessing(currentFrameTime, processedTime),
    [currentFrameTime, processedTime, throttledProcessing],
  );

  useEffect(() => {
    const delta = currentFrameTime - (previousFrameTime ?? 0);
    if (previousFrameTime && delta > 0) {
      const currentFps = 1000 / delta;
      const history = [...frameHistory].slice(0, 59);
      history.unshift(currentFps);
      setFrameHistory(history);
    }
  }, [frameHistory, currentFrameTime, previousFrameTime]);

  useEffect(() => {
    const delta = processedTime - (previousProcessedTime ?? 0);
    if (previousProcessedTime && delta > 0) {
      const currentFps = 1000 / delta;
      const history = [...processingHistory].slice(0, 59);
      history.unshift(currentFps);
      setProcessingHistory(history);
    }
  }, [processingHistory, processedTime, previousProcessedTime]);

  const throttledUpdateFpsUps = useMemo(
    () =>
      throttle((frameHistory: number[], processingHistory: number[]) => {
        const totalFps = frameHistory.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
        const averageFps = Math.round((totalFps / frameHistory.length) * 100) / 100;
        setFps(averageFps);

        const totalUps = processingHistory.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
        const averageUps = Math.round((totalUps / processingHistory.length) * 100) / 100;
        setUps(averageUps);
      }, 50),
    [],
  );

  useEffect(
    () => throttledUpdateFpsUps(frameHistory, processingHistory),
    [frameHistory, processingHistory, throttledUpdateFpsUps],
  );

  useEffect(() => {
    let frameId: number;
    const frame = (newFrameTime: number) => {
      setCurrentFrameTime(newFrameTime);
      frameId = requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
    return () => cancelAnimationFrame(frameId);
  }, []);
  return { startedOn, currentFrameTime, previousFrameTime, fps, ups };
};

export default useGameLoop;
