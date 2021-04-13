import * as express from 'express';
import * as cors from 'cors';
import * as expressSession from 'express-session';
import { initialize, session } from 'passport';
import { Routes } from './routes/routes';
import { HealthStatusRoutes } from './health-status/health-status-routes';
import { AuthGoogleRoutes } from './auth/passport-google-routes';
import { GoogleStrategy } from './auth/passport-google-strategy';

export class App {
  private readonly express: express.Application;
  private readonly customRoutes = new Routes();
  private readonly healthStatus = new HealthStatusRoutes();
  private readonly authGoogleRoutes = new AuthGoogleRoutes();
  private readonly googleStrategy = new GoogleStrategy();

  public constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.googleStrategy.init();
  }

  public getExpress(): express.Application {
    return this.express;
  }

  private middleware(): void {
    this.express.use(expressSession({ secret: 'cats', resave: false, saveUninitialized: true }));
    this.express.use(initialize());
    this.express.use(session());
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(cors());
    this.express.use(this.customRoutes.execute());
    this.express.use(this.healthStatus.execute());
    this.express.use(this.authGoogleRoutes.execute());
  }

  private routes(): void {
    this.express.get('/', (req, res): express.Response => {
      return res.send('Hello World');
    })
  }
};
