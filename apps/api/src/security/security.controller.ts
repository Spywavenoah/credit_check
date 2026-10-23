import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Security')
@Controller('api/v1/security')
export class SecurityController {
  @Post('change-password')
  changePassword(@Body() body: any) {
    return { success: true, message: 'Password updated successfully' };
  }

  @Post('enable-2fa')
  enable2fa(@Body() body: any) {
    return { success: true, secret: 'KVKFKRCPNZQ2GJQZ', qrCodeUrl: 'otpauth://totp/CreditCheck:demo' };
  }

  @Post('confirm-2fa')
  confirm2fa(@Body() body: any) {
    return { success: true, message: '2FA confirmed' };
  }

  @Post('reset-2fa')
  reset2fa(@Body() body: any) {
    return { success: true, message: '2FA reset successful' };
  }

  @Get('session-status')
  sessionStatus() {
    return {
      activeSessions: 2,
      lastActivity: new Date().toISOString(),
      idleTimeoutMinutes: 15,
      autoLockEnabled: true,
    };
  }

  @Post('logout-all')
  logoutAll() {
    return { success: true, message: 'All sessions logged out' };
  }
}
