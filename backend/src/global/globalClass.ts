import { HttpStatus } from '@nestjs/common';

export class ResponseData<T> {
  constructor(
    public data: T | T[],
    public status: HttpStatus = 200,
    public message: string = 'Success',
  ) {
    return this;
  }
}
