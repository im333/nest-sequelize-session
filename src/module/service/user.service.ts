import { Injectable, Inject } from '@nestjs/common';
import { User } from '../../dbModels/user.db.model';
import { Model } from 'sequelize-typescript';
// import { IUsers } from '../../dbModels/user.db.interface';
import { userDto } from '../dto/user.dto';
import { IUsersService } from 'db/database.interface';

@Injectable()
export class UsersServices implements IUsersService<User, userDto> {
  constructor(
    @Inject('UsersRepository') private readonly usersRepository: typeof User,
  ) {}

  public async findAll(): Promise<Array<User>> {
    return await this.usersRepository.findAll<User>();
  }

  public async findOne(options: Object): Promise<User | null> {
    return await this.usersRepository.findOne<User>(options);
  }

  public async findById(id: number): Promise<User | null> {
    return await this.usersRepository.findById<User>(id);
  }
  public async create(user: userDto): Promise<User> {
    if ((user.id = 0)) {
      delete user.id;
    }
    user.registrationTime = new Date();
    return await this.usersRepository.create<User>(user);
  }
}
