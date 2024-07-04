import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private users: CreateUserDto[] = [];

  async createUser(createUserDto: CreateUserDto): Promise<void> {
    const existingUser = this.users.find((user) => user.email === createUserDto.email);
    if (existingUser) {
      throw new Error('User account with email already exists.');
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    this.users.push({ ...createUserDto, password: hashedPassword });
  }

  async findOne(email: string): Promise<CreateUserDto | undefined> {
    return this.users.find(user => user.email === email);
  }

  async updateUser(email: string, updateUserDto: UpdateUserDto): Promise<CreateUserDto | undefined> {
    const userIndex = this.users.findIndex(user => user.email === email);
    if (userIndex === -1) {
      return undefined;
    }

    this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
    return this.users[userIndex];
  }
}