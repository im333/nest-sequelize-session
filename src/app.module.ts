import { Module } from '@nestjs/common';
import { UserModule } from './module/module/user.module';
import { ReplyModule } from './module/module/reply.module';

@Module({
  imports: [UserModule, ReplyModule],
})
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer): void {
//     consumer
//       .apply((req, res, next) => {
//         console.log(`Request...`);
//         next();
//       })
//       .forRoutes(AppController);
//   }
// }
export class AppModule {}
