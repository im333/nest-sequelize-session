import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UserController } from '../controller/user.controller';
import { UsersServices } from '../service/user.service';
import { UsersProvider } from '../providers/users.providers';
import { DatabaseModule } from '../../db/database.module';
import { sessionConfig } from '../../config/session.config';
import { autoMiddleware } from '../../public/middleware/auto.middleware';
import { ExpressSessionMiddleware } from '@nest-middlewares/express-session';
@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UsersServices, UsersProvider],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    ExpressSessionMiddleware.configure(sessionConfig);
    consumer.apply(ExpressSessionMiddleware, autoMiddleware).forRoutes('/');
  }
}
