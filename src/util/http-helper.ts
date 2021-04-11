import { Response } from 'express';
import { ApiError } from '../model/api-error';
import { environment } from '../configuration/environment';
import { ValidationMessage } from '../model/validate-message';

export class HttpHelper implements IHttpHelper {
  private readonly isDebugEnabled = !environment.production;
  private readonly unprocessableEntity = 422;
  private readonly internalServerError = 500;

  public buildSuccessResponse(result: any, res: Response): Response {
    console.log('Body parameter received for mapping');
    console.log('ExpressResult Created', result);
    return res.status(201).send(result);
  }

  public buildErrorResponse(error: ApiError | ValidationMessage[][], res: Response): Response {
    console.log('Function that handle with error messages in httpHelper');
    const statusCode = Array.isArray(error) && ValidationMessage.prototype.isPrototypeOf(error[0]) ||
      Array.isArray(error) && ValidationMessage.prototype.isPrototypeOf(error[0][0]) ?
      this.unprocessableEntity : error instanceof ApiError ?
        error.statusCode : this.internalServerError;

    return res.status(statusCode).send(error);
  }
}

export interface IHttpHelper {
  buildSuccessResponse(result: any, res: Response): Response;
  buildErrorResponse(error: ApiError, res: Response): Response;
}
