import { Router } from 'express';
import { TestControler } from '../controller/test.controller';

const router = Router();

export class Routes {

  testController: TestControler;

  constructor() {
    this.testController = new TestControler();
  }

  public execute(): Router {
    router.get('/test', this.testController.get);
    router.post('/test', this.testController.post);
    return router;
  }
};
