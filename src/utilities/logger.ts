import pino from 'pino';
const logger = pino({
  level: 'trace',
  browser: { asObject: false },
});

let originalConsole: Console;
export const attachLogger = () => {
  originalConsole = { ...window.console };
  console.log = logger.trace;
  console.debug = logger.debug;
  console.info = logger.info;
  console.warn = logger.warn;
  console.error = logger.error;
};

export const detachLogger = () => {
  window.console = originalConsole;
};

export default logger;
