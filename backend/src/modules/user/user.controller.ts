import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ResponseData } from 'src/global/globalClass';
import User from 'src/interfaces/user.interface';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(): ResponseData<User> {
    const users: User[] = this.userService.getList();

    return new ResponseData(users);
  }
}
