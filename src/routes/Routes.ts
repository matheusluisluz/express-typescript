import { Request, Response, Router } from 'express';
const router = Router();

export class Routes {
  public execute(): Router {
    router.get('/test', (req: Request, res: Response) => {
      return res.status(201).send({ message: '/GET Hello World' });
    });
    router.post('/test', (req: Request, res: Response) => {
      console.log(req.body);
      console.log(req.query);
      return res.status(201).send({ message: '/POST Hello World' })
    });
    return router;
  }
};
