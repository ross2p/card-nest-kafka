import { Injectable } from '@nestjs/common';
import {
  CreateUserDto,
  DatabaseService,
  Prisma,
  UserEntity,
} from 'card-common';

@Injectable()
export class UserRepository {
  private readonly userRepository: Prisma.UserDelegate;

  constructor(databaseService: DatabaseService) {
    this.userRepository = databaseService.user as Prisma.UserDelegate;
  }

  public async findUserByEmail(email: string): Promise<UserEntity | null> {
    return this.userRepository.findUnique({
      where: { email },
    });
  }

  public async findUserByIdWithPassword(
    id: string,
  ): Promise<UserEntity | null> {
    return this.userRepository.findUnique({
      where: { id },
    });
  }

  public async createUser(data: CreateUserDto): Promise<UserEntity> {
    return this.userRepository.create({ data });
  }
}
