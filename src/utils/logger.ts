import pino from 'pino';
const logger = pino({
  level: 'info',
  browser: { asObject: true },
});

export default logger;
