import { Module } from '@nestjs/common';
import { CommonModule } from 'card-common';
import { UserMessageController } from './user.message.controller';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';

@Module({
  imports: [CommonModule],
  controllers: [UserController, UserMessageController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
