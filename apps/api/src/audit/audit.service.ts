import { Injectable } from '@nestjs/common';

@Injectable()
export class AuditService {
  findAll() {
    return [
      { id: 'audit_1', action: 'LOGIN', actorId: 'user_1', targetId: 'user_1', createdAt: new Date().toISOString() },
    ];
  }
}
