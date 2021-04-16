import { App } from './application';
import { environment } from './configuration/environment';
import { logger } from './util/logger';

const app = new App().getExpress();

const shutdown = () => {
  logger.warn('Server receive signal to shutdown.');
  process.exit(0);
};

process
  .on('SIGTERM', shutdown)
  .on('SIGINT', shutdown)
  .on('SIGHUP', shutdown)
  .on('uncaughtException', (er) => {
    logger.error(`uncaughtException caught the error: ${er.message}`);
    throw er;
  })
  .on('exit', (code) => {
    logger.info('Node process exit with code:', code);
  });

const server = app.listen(environment.port, () => {
  logger.info(`Server starting at ${environment.port}`);

  server.on('close', () => {
    logger.info('Shutdown the application server');
  });
});

module.exports = server;
