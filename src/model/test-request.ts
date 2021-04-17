import { IsNumber, IsString } from 'class-validator';

export class TestRequest {
  constructor(fields: Partial<{
    name: string;
    age: number;

  }>) {
    Object.assign(this, fields);
  }

  @IsString({ message: 'name must be a string' })
  name: string;

  @IsNumber({}, { message: 'age must be a number' })
  age: number;
}