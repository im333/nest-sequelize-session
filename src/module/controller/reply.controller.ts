import {
  Get,
  Controller,
  Body,
  Response,
  Session,
  HttpStatus,
} from '@nestjs/common';

@Controller('reply')
export class ReplyController {
  @Get()
  create(@Body() Body, @Response() res, @Session() session) {
    res.status(HttpStatus.OK).json(123);
  }
}
