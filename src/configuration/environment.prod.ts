import { Configuration } from './configuration';

const env: NodeJS.ProcessEnv = process.env;

const port = env.URL || 3001;

const configuration: Configuration = {
  production: true,
  port: `${port}`
};

export default configuration;
