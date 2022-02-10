import pino from 'pino';
const logger = pino({
  level: 'debug',
  browser: { asObject: true },
});

export default logger;
