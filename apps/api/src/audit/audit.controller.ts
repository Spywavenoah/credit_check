import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Audit')
@Controller('api/v1/audit')
export class AuditController {
  @Get('logs')
  listLogs() {
    return [
      { id: 'audit_1', action: 'USER_CREATED', actorId: 'user_1', targetId: 'user_2', createdAt: new Date().toISOString() },
      { id: 'audit_2', action: 'PASSWORD_RESET', actorId: 'user_1', targetId: 'user_3', createdAt: new Date().toISOString() },
      { id: 'audit_3', action: 'MFA_RESET', actorId: 'user_1', targetId: 'user_4', createdAt: new Date().toISOString() },
    ];
  }

  @Get('logs/:id')
  getLog(@Param('id') string) {
    return { id, action: 'USER_CREATED', actorId: 'user_1', targetId: 'user_2', metadata: { createdBy: 'Admin' } };
  }

  @Get('user/:userId')
  userLogs(@Param('userId') string) {
    return [
      { id: 'audit_1', action: 'LOGIN', userId, createdAt: new Date().toISOString() },
      { id: 'audit_2', action: 'MFA_ENABLED', userId, createdAt: new Date().toISOString() },
    ];
  }
}
