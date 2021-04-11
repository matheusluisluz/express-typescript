import { App } from './Application';

const app = new App().getExpress();

const shutdown = () => {
  console.warn('Server receive signal to shutdown.');
  process.exit(0);
};

process
  .on('SIGTERM', shutdown)
  .on('SIGINT', shutdown)
  .on('SIGHUP', shutdown)
  .on('uncaughtException', (er) => {
    console.error(`uncaughtException caught the error: ${er.message}`);
    throw er;
  })
  .on('exit', (code) => {
    console.info('Node process exit with code:', code);
  });

const server = app.listen('3001', () => {

  server.on('close', () => {
    console.log('Shutdown the application server');
  });
});

module.exports = server;