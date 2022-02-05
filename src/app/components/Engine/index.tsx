import * as React from 'react';
import log from 'utils/logger';
import useFrameTime from './useFrameTime';

interface EngineProps {
  children: React.ReactNode;
}

export function Engine({ children }: EngineProps) {
  const frameTime = useFrameTime();

  const render = () => {
    log.debug('Rendered');
  };

  const update = () => {
    log.debug('Updated');
  };

  React.useEffect(() => {
    update();
    render();
  }, [frameTime]);

  return (
    <>
      {/* {frameTime} */}
      <br />
      {children}
    </>
  );
}
