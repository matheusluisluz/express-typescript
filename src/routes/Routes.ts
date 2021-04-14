import { NextFunction, Request, Response, Router } from 'express';
import { Controler } from '../controller/controller';

const router = Router();

export class Routes {

  controller: Controler;

  constructor() {
    this.controller = new Controler();
  }

  public execute(): Router {
    router.get('/test', this.isLoggedIn, this.controller.get);
    router.post('/test', this.isLoggedIn, this.controller.post);
    return router;
  }

  private isLoggedIn(req: Request, res: Response, next: NextFunction) {
    req.user ? next() : res.sendStatus(401);
  }
};
