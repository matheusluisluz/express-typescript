import { createLogger, format, transports } from 'winston';

export const logger = createLogger({
  format: format.combine(
    format.timestamp({ format: 'YYYY/MM/DD HH:mm:ss' }),
    format.json(),
    format.colorize({ all: true , colors: { info: 'green', error: 'red' } }),
    format.splat()
  ),
  transports: [new transports.Console()]
});
