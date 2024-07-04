import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const createUserDto: CreateUserDto = { email: 'test@example.com', password: 'password123' };
      await expect(service.createUser(createUserDto)).resolves.not.toThrow();
    });

    it('should throw an error if user already exists', async () => {
      const createUserDto: CreateUserDto = { email: 'test@example.com', password: 'password123' };
      await service.createUser(createUserDto);
      await expect(service.createUser(createUserDto)).rejects.toThrow('User account with email already exists.');
    });
  });

  describe('findOne', () => {
    it('should return a user if found', async () => {
      const createUserDto: CreateUserDto = { email: 'test@example.com', password: 'password123' };
      await service.createUser(createUserDto);
      const user = await service.findOne('test@example.com');
      expect(user).toBeDefined();
      expect(user.email).toBe('test@example.com');
    });

    it('should return undefined if user not found', async () => {
      const user = await service.findOne('nonexistent@example.com');
      expect(user).toBeUndefined();
    });
  });

  describe('updateUser', () => {
    it('should update an existing user', async () => {
      const createUserDto: CreateUserDto = { email: 'test@example.com', password: 'password123' };
      await service.createUser(createUserDto);
      
      const updateUserDto: UpdateUserDto = { password: 'newpassword123' };
      const updatedUser = await service.updateUser('test@example.com', updateUserDto);
      
      expect(updatedUser).toBeDefined();
      expect(updatedUser.password).toBe('newpassword123');
    });

    it('should return undefined if user to update is not found', async () => {
      const updateUserDto: UpdateUserDto = { password: 'newpassword123' };
      const updatedUser = await service.updateUser('nonexistent@example.com', updateUserDto);
      
      expect(updatedUser).toBeUndefined();
    });
  });
});