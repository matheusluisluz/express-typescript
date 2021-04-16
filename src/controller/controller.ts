import { Request, Response } from 'express';
import { HttpHelper } from '../util/http-helper';
import { logger } from '../util/logger';

export class Controler {

  public get(req: Request, res: Response): Response {
    const httpHelper: HttpHelper = new HttpHelper();
    try {
      logger.info(req.query);
      const result = { success: true, message: '/GET Hello World' };
      return httpHelper.buildSuccessResponse(result, res);
    } catch (error) {
      logger.error('Error processing information', error.stack || '', error);
      return httpHelper.buildErrorResponse(error, res);
    }
  }
  public post(req: Request, res: Response): Response {
    const httpHelper: HttpHelper = new HttpHelper();
    try {
      logger.info(req.body);
      logger.info(req.query);
      const result = { success: true, message: '/POST Hello World' };
      return httpHelper.buildSuccessResponse(result, res);
    } catch (error) {
      logger.error('Error processing information', error.stack || '', error);
      return httpHelper.buildErrorResponse(error, res);
    }
  }
}
