import { Injectable } from '@nestjs/common';

@Injectable()
export class RolesService {
  findAll() {
    return [
      { id: 'role_1', name: 'Super Admin', description: 'Full platform access' },
      { id: 'role_2', name: 'Admin', description: 'Administrative access' },
      { id: 'role_3', name: 'Support Agent', description: 'Support account' },
    ];
  }
}
