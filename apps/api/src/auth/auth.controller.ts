import { Controller, Post, Body, Get, Req, UnauthorizedException } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { SetupTwoFactorDto } from './dto/setup-two-factor.dto';

@ApiTags('Auth')
@Controller('api/v1/auth')
export class AuthController {
  @Post('login')
  @ApiBody({ type: LoginDto })
  async login(@Body() dto: LoginDto) {
    return {
      accessToken: 'demo-access-token',
      refreshToken: 'demo-refresh-token',
      user: {
        id: 'user_1',
        email: dto.email,
        mustChangePassword: true,
        requiresTwoFactor: true,
      },
    };
  }

  @Post('setup-2fa')
  async setupTwoFactor(@Body() dto: SetupTwoFactorDto) {
    return {
      secret: 'JBSWY3DPEHPK3PXP',
      qrCodeUrl: 'otpauth://totp/CreditCheck:user@example.com?secret=JBSWY3DPEHPK3PXP&issuer=CreditCheck',
      recoveryCodes: ['ABCD', 'EFGH', 'IJKL'],
    };
  }

  @Post('verify-2fa')
  async verifyTwoFactor(@Body() body: { code: string }) {
    return {
      success: true,
      message: 'Two-factor verification successful',
    };
  }

  @Post('reset-password')
  async resetPassword(@Body() body: { token: string; password: string }) {
    return { success: true, message: 'Password reset successful' };
  }

  @Get('me')
  getCurrentUser(@Req() req: any) {
    if (!req.user) {
      throw new UnauthorizedException('Unauthorized');
    }

    return {
      id: req.user.id,
      email: req.user.email,
      name: 'System Admin',
      role: 'Super Admin',
    };
  }
}
