import * as React from 'react';

// https://medium.com/projector-hq/writing-a-run-loop-in-javascript-react-9605f74174b
const useFrameTime = () => {
  const [frameTime, setFrameTime] = React.useState<number>();
  React.useEffect(() => {
    let frameId: number;
    const frame = (time: number) => {
      setFrameTime(time);
      frameId = requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
    return () => cancelAnimationFrame(frameId);
  }, []);
  return frameTime;
};

export default useFrameTime;
