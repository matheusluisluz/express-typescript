import prd from './environment.prod';
import dev from './environment.dev';

import { Configuration } from './configuration';

const env: NodeJS.ProcessEnv = process.env;

const port = env.URL || 3001;

const configuration: Configuration = {
  production: false,
  port: `${port}`
};

function build(): Configuration {
  switch (process.env.ENVIRONMENT) {
    case 'prd':
    case 'prod':
      const production: Configuration = { ...configuration, ...prd };
      return production;
    case 'dev':
      const development: Configuration = { ...configuration, ...dev };
      return development;
    default:
      const defaultConfiguration: Configuration = { ...configuration, ...dev };
      return defaultConfiguration;
  }
}

export const environment: Configuration = build();
