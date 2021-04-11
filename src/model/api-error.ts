export abstract class ApiError extends Error {

  public abstract statusCode: number;

  constructor(public message: string, public code?: string, public stack?: string) {
    super();
  }
}
