import { Module } from '@nestjs/common';
import { UsersService } from './user.service'
// import { UsersController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import {User} from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  // controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UserModule {}
