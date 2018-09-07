import { Injectable } from '@nestjs/common';

@Injectable()
export class ReplyService {
  root(): string {
    return 'Hello World!';
  }
}
