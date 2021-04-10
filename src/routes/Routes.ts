import express from 'express';
const router = express.Router();

export class Routes {
  public execute(): express.Router {
    router.get('/test', (req: express.Request, res: express.Response) => {
      return res.status(201).send({ message: '/GET Hello World' });
    });
    router.post('/test', (req: express.Request, res: express.Response) => {
      const body = req.body();
      console.log(body);
      return res.status(201).send({ message: '/POST Hello World' })
    });
    return router;
  }
};
