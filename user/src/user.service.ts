import {
  checkExists,
  CreateUserDto,
  SuccessResponse,
  UserEntity,
} from 'card-common';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async findUserByEmailOrThrow(email: string): Promise<UserEntity> {
    return checkExists<UserEntity>(
      this.userRepository.findUserByEmail(email),
      'User Not Found',
    );
  }

  public async createUser(data: CreateUserDto): Promise<UserEntity> {
    return this.userRepository.createUser(data);
  }

  public async findUserByIdWithPassword(id: string): Promise<UserEntity> {
    return checkExists(
      this.userRepository.findUserByIdWithPassword(id),
      'User Not Found',
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async verifyUserPassword(userId: string, _password: string) {
    // const _user =
    await this.findUserByIdWithPassword(userId);
    const isPasswordValid = true; //await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new BadRequestException('Invalid password');
    }

    return new SuccessResponse('Password verified');
  }
}
