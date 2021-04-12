import { Router } from 'express';
import { HealthStatusControler } from '../health-status/health-status-controller';

const router = Router();

export class HealthStatusRoutes {

  controller: HealthStatusControler;

  constructor() {
    this.controller = new HealthStatusControler();
  }

  public execute(): Router {
    router.get('/health-status', this.controller.get);
    return router;
  }
};
