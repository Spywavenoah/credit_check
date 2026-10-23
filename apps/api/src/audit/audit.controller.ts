import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../common/guards/auth.guard';
import { RolesGuard, Roles, Permissions } from '../common/guards/roles.guard';
import { permissions } from '../common/permission.constants';

@Controller('api/v1/audit')
@UseGuards(AuthGuard, RolesGuard)
export class AuditController {
  @Get('logs')
  @Roles('Super Admin', 'Admin', 'Compliance Officer')
  @Permissions(permissions.AUDIT_VIEW)
  listLogs(@Query('page') page = '1') {
    return {
      page: Number(page),
      data: [
        { id: 'log_1', action: 'LOGIN', message: 'Admin login succeeded', createdAt: new Date().toISOString() },
        { id: 'log_2', action: 'PASSWORD_RESET', message: 'Password reset was generated', createdAt: new Date().toISOString() },
      ],
    };
  }

  @Get('logs/:id')
  @Roles('Super Admin', 'Admin', 'Compliance Officer')
  @Permissions(permissions.AUDIT_VIEW)
  getLog(@Param('id') id: string) {
    return { id, action: 'MFA_SETUP', message: 'User configured MFA', createdAt: new Date().toISOString() };
  }

  @Get('user/:userId')
  @Roles('Super Admin', 'Admin', 'Compliance Officer')
  @Permissions(permissions.AUDIT_VIEW)
  userLogs(@Param('userId') userId: string) {
    return { userId, data: [{ action: 'LOGIN', createdAt: new Date().toISOString() }] };
  }
}

import { Module } from '@nestjs/common';

@Module({
  controllers: [AuditController],
})
export class AuditModule {}
