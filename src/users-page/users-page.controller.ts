// import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
// import { UsersPageService } from './users-page.service';
// import { User } from '../user/entities/user.entity';

// @Controller('users')
// export class UsersPageController {
//   constructor(private readonly usersService: UsersPageService) {}

//   @Get()
//   findAll(): Promise<User[]> {
//     return this.usersService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: number): Promise<User> {
//     return this.usersService.findOne(id);
//   }

//   @Post()
//   create(@Body() user: User): Promise<User> {
//     return this.usersService.create(user);
//   }

//   @Put(':id')
//   update(@Param('id') id: number, @Body() user: User): Promise<User> {
//     return this.usersService.update(id, user);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: number): Promise<void> {
//     return this.usersService.remove(id);
//   }
// }