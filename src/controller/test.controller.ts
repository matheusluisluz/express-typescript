import { Request, Response } from 'express';
import { HttpHelper } from '../util/http-helper';

export class TestControler {

  public get(req: Request, res: Response) {
    const httpHelper: HttpHelper = new HttpHelper();
    try {
      console.log(req.query);
      const result = { success: true, message: '/GET Hello World' };
      return httpHelper.buildSuccessResponse(result, res);
    } catch (error) {
      console.error('Error processing information', error.stack || '', error);
      return httpHelper.buildErrorResponse(error, res);
    }
  }
  public post(req: Request, res: Response) {
    const httpHelper: HttpHelper = new HttpHelper();
    try {
      console.log(req.body);
      console.log(req.query);
      const result = { success: true, message: '/POST Hello World' };
      return httpHelper.buildSuccessResponse(result, res);
    } catch (error) {
      console.error('Error processing information', error.stack || '', error);
      return httpHelper.buildErrorResponse(error, res);
    }
  }
}
