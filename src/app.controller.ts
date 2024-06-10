import { Controller, Get, UseGuards, Req } from '@nestjs/common';


@Controller('api')
export class AppController {
  @Get('hello-world')
  getHelloWorld(): string {
    return 'Hello world';
  }

 
}
//reminder to self: use `npm start:dev'