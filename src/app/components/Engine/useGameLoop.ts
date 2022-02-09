import { useState, useEffect, useRef, useMemo } from 'react';
import throttle from 'lodash/throttle';

export declare type Timings = {
  startedOn: number;
  currentFrameTime: number;
  previousFrameTime: number;
  fps: number;
  ups: number;
};

const usePrevious = (value: number) => {
  const ref = useRef<number>(0);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const getHistory = (deltaMs: number, history: number[]) => {
  if (deltaMs <= 0) return history;
  const current = 1000 / deltaMs;
  const entries = [...history].slice(0, 59);
  entries.unshift(current);
  return entries;
};

const getAverage = (history: number[]) => {
  if (history.length === 0) return 0;
  const total = history.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  const avg = Math.round((total / history.length) * 100) / 100;
  return avg;
};

/**
 * Game loop hook that updates every frame, with a processing handler triggered according to a delay.
 * @param handleProcessing The main processing handler, throttled by throttleDelay
 * @param throttleDelay How frequently the processing should be triggered
 * @returns The timings information
 */
const useGameLoop = (handleProcessing: (deltaMs: number) => void, throttleDelay: number): Timings => {
  const [startedOn] = useState<number>(performance.now());
  const [currentFrameTime, setCurrentFrameTime] = useState<number>(0);
  const previousFrameTime = usePrevious(currentFrameTime);
  const [processedTime, setProcessedTime] = useState<number>(0);
  const previousProcessedTime = usePrevious(processedTime);
  const [frameHistory, setFrameHistory] = useState<number[]>([]);
  const [processingHistory, setProcessingHistory] = useState<number[]>([]);
  const [fps, setFps] = useState<number>(0);
  const [ups, setUps] = useState<number>(0);

  // The main engine processing will be throttled to the param value
  const throttledProcessing = useMemo(() => {
    const handler = throttle((frameTime: number, processedOn: number) => {
      const delta = frameTime - processedOn;
      setProcessedTime(frameTime);
      handleProcessing(delta);
      // return () => handler.cancel();
    }, throttleDelay);
    return handler;
  }, [handleProcessing, throttleDelay]);

  useEffect(
    () => throttledProcessing(currentFrameTime, processedTime),
    [currentFrameTime, processedTime, throttledProcessing],
  );

  // We want to throttle the fps/ups updates to smooth it out.
  const throttledUpdateFpsUps = useMemo(() => {
    const handler = throttle((frameHistory: number[], processingHistory: number[]) => {
      setFps(getAverage(frameHistory));
      setUps(getAverage(processingHistory));
      // return () => handler.cancel();
    }, 100);
    return handler;
  }, []);

  useEffect(
    () => throttledUpdateFpsUps(frameHistory, processingHistory),
    [frameHistory, processingHistory, throttledUpdateFpsUps],
  );

  // Store deltas for frame per second calculations
  useEffect(() => {
    const delta = currentFrameTime - previousFrameTime;
    if (delta <= 0) return;
    const history = getHistory(delta, frameHistory);
    setFrameHistory(history);
  }, [frameHistory, currentFrameTime, previousFrameTime]);

  // Store deltas for updates per second calculations
  useEffect(() => {
    const delta = processedTime - previousProcessedTime;
    if (delta <= 0) return;
    const history = getHistory(delta, processingHistory);
    setProcessingHistory(history);
  }, [processingHistory, processedTime, previousProcessedTime]);

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
