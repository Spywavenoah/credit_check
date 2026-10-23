import { Controller, Get, Post, Body, Patch, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../common/guards/auth.guard';
import { RolesGuard, Roles, Permissions } from '../common/guards/roles.guard';
import { permissions } from '../common/permission.constants';

export class ChangePasswordDto {
  currentPassword!: string;
  newPassword!: string;
}

export class Enable2FADto {
  code!: string;
}

@Controller('api/v1/security')
@UseGuards(AuthGuard, RolesGuard)
export class SecurityController {
  @Post('change-password')
  @Roles('Super Admin', 'Admin', 'Support Agent', 'Compliance Officer', 'Finance / Operations', 'Viewer')
  @Permissions(permissions.SECURITY_MANAGE)
  changePassword(@Body() dto: ChangePasswordDto) {
    return { message: 'Password changed', passwordStrength: 'strong' };
  }

  @Post('enable-2fa')
  @Roles('Super Admin', 'Admin', 'Support Agent', 'Compliance Officer', 'Finance / Operations', 'Viewer')
  @Permissions(permissions.SECURITY_MANAGE)
  enable2FA(@Body() dto: Enable2FADto) {
    return { message: '2FA enabled', code: dto.code };
  }

  @Post('confirm-2fa')
  @Roles('Super Admin', 'Admin', 'Support Agent', 'Compliance Officer', 'Finance / Operations', 'Viewer')
  @Permissions(permissions.SECURITY_MANAGE)
  confirm2FA(@Body('code') code: string) {
    return { message: '2FA confirmed', valid: code.length >= 6 };
  }

  @Post('reset-2fa')
  @Roles('Super Admin', 'Admin')
  @Permissions(permissions.USER_RESET_MFA)
  reset2FA() {
    return { message: '2FA reset successfully' };
  }

  @Get('session-status')
  @Roles('Super Admin', 'Admin')
  @Permissions(permissions.SECURITY_MANAGE)
  sessionStatus() {
    return {
      activeSessions: 3,
      lastLogin: new Date().toISOString(),
      mfaRequired: true,
    };
  }

  @Post('logout-all')
  @Roles('Super Admin', 'Admin')
  @Permissions(permissions.SECURITY_MANAGE)
  logoutAll() {
    return { message: 'All sessions revoked' };
  }
}

import { Module } from '@nestjs/common';

@Module({
  controllers: [SecurityController],
})
export class SecurityModule {}
