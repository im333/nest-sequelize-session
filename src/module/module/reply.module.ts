import { Module } from '@nestjs/common';
import { ReplyController } from '../controller/reply.controller';
import { ReplyService } from '../service/reply.service';

@Module({
  controllers: [ReplyController],
  providers: [ReplyService],
})
export class ReplyModule {}
