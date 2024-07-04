import { Injectable } from '@nestjs/common';
import { UsersService } from '../user/user.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    console.log('Validating user:', email);
    const user = await this.usersService.findOne(email);
    if (!user) {
      console.log('User not found');
      return null;
    }
    console.log('User found, comparing passwords');
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      console.log('Password is valid');
      const { password, ...result } = user;
      return result;
    }
    console.log('Password is invalid');
    return null;
  }

  async login(user: any) {
    console.log('Logging in user:', user.email);
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async createUser(email: string, password: string): Promise<void> {
    console.log('Creating user:', email);
    const hashedPassword = await bcrypt.hash(password, 10);
    await this.usersService.createUser({ email, password: hashedPassword });
    console.log('User created successfully');
  }
}