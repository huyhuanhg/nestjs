import { Injectable } from '@nestjs/common';
import User from 'src/interfaces/user.interface';

@Injectable()
export class UserService {
  getList(): User[] {
    return [
      {
        id: 1,
        first_name: 'Huy',
        last_name: 'Huan',
      },
      {
        id: 2,
        first_name: 'Pham',
        last_name: 'Hai',
      },
    ];
  }
}
