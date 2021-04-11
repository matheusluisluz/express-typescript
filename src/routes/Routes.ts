import { Router } from 'express';
import { Controler } from '../controller/controller';

const router = Router();

export class Routes {

  controller: Controler;

  constructor() {
    this.controller = new Controler();
  }

  public execute(): Router {
    router.get('/test', this.controller.get);
    router.post('/test', this.controller.post);
    return router;
  }
};
