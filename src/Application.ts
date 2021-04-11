import * as express from 'express';
import * as cors from 'cors';
import { Routes } from './routes/Routes';

export class App {
  private readonly express: express.Application;
  private readonly customRoutes = new Routes();

  public constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  public getExpress(): express.Application {
    return this.express;
  }

  private middleware(): void {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(cors());
    this.express.use(this.customRoutes.execute());
  }

  private routes(): void {
    this.express.get('/', (req, res): express.Response => {
      return res.send('Hello World');
    })
  }
};
