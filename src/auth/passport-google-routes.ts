import { NextFunction, Request, Response, Router } from 'express';
import { authenticate } from 'passport';

const router = Router();

export class AuthGoogleRoutes {

  public execute(): Router {
    router.get('/login', (req: Request, res: Response) => {
      return res.send('<a href="/auth/google">Authenticate with Google</a>');
    });
    router.get('/auth/google', authenticate('google', { scope: ['email', 'profile'] }));
    router.get('/auth/google/callback', authenticate('google', {
      successRedirect: '/protected',
      failureRedirect: '/auth/google/failure'
    }));
    router.get('/protected', this.isLoggedIn, (req: Request, res: Response) => {
      return res.send(`Hello ${req.user}`);
    });
    router.get('/logout', (req: Request, res: Response) => {
      req.logout();
      req.session.destroy(err => {
        if (err) {
          throw err;
        }
      });
      res.send('Goodbye!');
    });
    router.get('/auth/google/failure', (req: Request, res: Response) => {
      return res.send(`Failed to authenticate..`);
    });
    return router;
  }

  private isLoggedIn(req: Request, res: Response, next: NextFunction) {
    req.user ? next() : res.sendStatus(401);
  }
};
