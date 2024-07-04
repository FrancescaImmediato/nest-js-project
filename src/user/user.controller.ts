import { Body, Controller, Post, HttpStatus, HttpException } from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto'; // Make sure this import is correct

@Controller('api/auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto) {
    try {
      await this.usersService.createUser(createUserDto);
      return { message: 'User created successfully', statusCode: HttpStatus.CREATED };
    } catch (error) {
      if (error.message === 'User account with email already exists.') {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}