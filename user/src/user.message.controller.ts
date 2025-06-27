import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateUserDto } from 'card-common';

@Controller()
export class UserMessageController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('user.findUserByEmail')
  public async findUserByEmail(data: { email: string }) {
    return this.userService.findUserByEmailOrThrow(data.email);
  }

  @MessagePattern('user.createUser')
  public async createUser(data: CreateUserDto) {
    return this.userService.createUser(data);
  }

  @MessagePattern('user.verifyUserPassword')
  public async verifyUserPassword(data: { userId: string; password: string }) {
    return this.userService.verifyUserPassword(data.userId, data.password);
  }
}
