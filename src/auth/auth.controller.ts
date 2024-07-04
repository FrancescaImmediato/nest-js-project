import { Body, Controller, Post, HttpStatus, UseGuards, HttpException, UnauthorizedException, Req } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';


@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    try {
      await this.authService.createUser(createUserDto.email, createUserDto.password);
      return { message: 'User registered successfully', statusCode: HttpStatus.CREATED };
    } catch (error) {
      throw new HttpException('Registration failed', HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() req: Request) {
    return this.authService.login(req.user);
  }
}