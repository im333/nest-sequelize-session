import {
  Get,
  Controller,
  Param,
  Body,
  Post,
  Response,
  Request,
  Session,
  HttpStatus,
  UsePipes,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UsersServices } from '../service/user.service';
import { paramType } from '../pipe/paramType.pipe';
import { UserGuard } from '../../public/guard/user.guard';
import { UserInterceptor } from '../../public/interceptor/user.interceptor';
import { userDto } from '../dto/user.dto';
import { Roles } from '../../public/decorator/roles.decorator';
@Controller()
@UseGuards(UserGuard)
@UseInterceptors(UserInterceptor)
export class UserController {
  constructor(private readonly UserService: UsersServices) {}

  @Get('users')
  public async getUsers(@Response() res, @Request() req, @Session() session) {
    const users = await this.UserService.findAll();
    return res.status(HttpStatus.OK).json(session);
  }

  @Get('users/')
  public async findUser(@Response() res) {
    let queryCondition = { where: { Name: 'Mary' } };
    const users = await this.UserService.findOne(queryCondition);
    return res.status(HttpStatus.OK).json(users);
  }

  @Get('users/:id')
  public async getUser(@Response() res, @Param() param, @Session() session) {
    session.userId = 1;

    const users = await this.UserService.findById(param.id);
    return res.status(HttpStatus.OK).json(session.id);
  }
  @Post('create')
  @UsePipes(new paramType())
  public async createUser(@Response() res, @Body() userDto: userDto) {
    const users = await this.UserService.create(userDto);
    return res.status(HttpStatus.OK).json(users);
  }

  @Post()
  @UsePipes(new paramType())
  @Roles('admin')
  create(@Body() userDto: userDto, @Response() res) {
    res.status(HttpStatus.OK).json('123');
  }
}
