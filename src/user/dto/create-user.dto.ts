import { IsEmail, IsString, MinLength, Validate } from 'class-validator';
import { PasswordMatchValidator } from './password-match.validator';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
  
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @MinLength(6)
  @Validate(PasswordMatchValidator, ['password'])
  confirmPassword: string;
}