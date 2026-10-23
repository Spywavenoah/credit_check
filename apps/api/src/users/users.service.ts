import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll() {
    return [
      { id: 'user_1', email: 'admin@creditcheck.africa', role: 'Super Admin', status: 'active' },
      { id: 'user_2', email: 'ops@creditcheck.africa', role: 'Admin', status: 'active' },
    ];
  }
}
