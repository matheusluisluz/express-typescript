import { Request, Response } from 'express';
import { address } from 'ip';
import { HttpHelper } from '../util/http-helper';
import * as packageInfo from '../../package.json';

export class HealthStatusControler {

  public get(req: Request, res: Response) {
    const httpHelper: HttpHelper = new HttpHelper();
    try {
      const result = {
        success: true,
        datetime: new Date(),
        service: packageInfo.name,
        version: packageInfo.version,
        ip: address(),
        container: process.env.HOSTNAME
      };
      return httpHelper.buildSuccessResponse(result, res);
    } catch (error) {
      console.error('Error processing information', error.stack || '', error);
      return httpHelper.buildErrorResponse(error, res);
    }
  }
}
