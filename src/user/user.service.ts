import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUser(user: User): Promise<User> {
    const existingUser = await this.usersRepository.findOne({ where: { email: user.email } });
    if (existingUser) {
      throw new Error('User account with email already exists.');
    }
    return this.usersRepository.save(user);
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { email } });
  }

  async updateUser(email: string, updateUserDto: UpdateUserDto): Promise<User | undefined> {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (!user) {
      return undefined;
    }

    // Update user properties
    Object.assign(user, updateUserDto);

    // Save the updated user
    return this.usersRepository.save(user);
  }
}












// import { Injectable } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
// import * as bcrypt from 'bcrypt';

// @Injectable()
// export class UsersService {
//   private users: CreateUserDto[] = [];

//   async createUser(createUserDto: CreateUserDto): Promise<void> {
//     const existingUser = this.users.find((user) => user.email === createUserDto.email);
//     if (existingUser) {
//       throw new Error('User account with email already exists.');
//     }

//     const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
//     this.users.push({ ...createUserDto, password: hashedPassword });
//   }

//   async findOne(email: string): Promise<CreateUserDto | undefined> {
//     return this.users.find(user => user.email === email);
//   }

//   async updateUser(email: string, updateUserDto: UpdateUserDto): Promise<CreateUserDto | undefined> {
//     const userIndex = this.users.findIndex(user => user.email === email);
//     if (userIndex === -1) {
//       return undefined;
//     }

//     this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
//     return this.users[userIndex];
//   }
// }