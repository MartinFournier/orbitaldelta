import pino from 'pino';
const logger = pino({
  level: 'debug',
  browser: { asObject: false },
});

export default logger;
