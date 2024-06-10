import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AppService } from './app.service';
import { ProjectsPageModule } from './projects-page/projects-page.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotEnv').config();
// reminder to create dotenv
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User],
      synchronize: false,
    }),
    UserModule,
    AuthModule,
    UserModule,
    ProjectsPageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
