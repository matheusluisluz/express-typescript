import { Request, Response } from 'express';
import { TestRequest } from '../model/test-request';
import { HttpHelper } from '../util/http-helper';
import { logger } from '../util/logger';
import { Validator } from '../validator/validator';

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

  public async post(req: Request, res: Response): Promise<Response> {
    const httpHelper: HttpHelper = new HttpHelper();
    try {
      logger.info(req.body);
      logger.info(req.query);
      const request = new TestRequest(req.body || '{}');
      const validator = await new Validator<TestRequest>().execute(request);
      const result = { success: true, message: validator };
      return httpHelper.buildSuccessResponse(result, res);
    } catch (error) {
      logger.error('Error processing information', error);
      return httpHelper.buildErrorResponse(error, res);
    }
  }
}
