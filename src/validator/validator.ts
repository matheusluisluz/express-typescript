import { validate, ValidationError } from 'class-validator';
import { ValidationMessage } from '../model/validate-message';

export class Validator<T extends {}> {
  public async execute(request: T): Promise<T> {
    const errors = await validate(request);
    if (errors.length > 0) {
      return Promise.reject(errors.map(err => this.transform(err)));
    }
    return await Promise.resolve(request);
  }

  private transform(error: ValidationError): ValidationMessage[] | ValidationMessage {
    if (error.children && error.children.length) {
      const children = error.children;
      const messages: ValidationError[] = Object.keys(children).map(key => children[key]);
      const msg = messages.map(map => {
        const err = map.constraints ? map.constraints : map.children ? map.children : map.property;
        const resp = Object.keys(err).map(key => err[key]);
        return new ValidationMessage(map.property, resp);
      })
      return msg;
    }
    const err = error.constraints ? error.constraints : error.property;
    const messages = Object.keys(err).map(key => err[key]);
    return new ValidationMessage(error.property, messages);
  }
}
