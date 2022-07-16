import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  signUp(body: CatsRequestDto) {
    return Promise.resolve(undefined);
  }
}
