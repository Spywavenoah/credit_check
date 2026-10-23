import { Controller, Get, Post, Body, Req, UnauthorizedException } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginDto, ForgotPasswordDto, ResetPasswordDto, VerifyTwoFactorDto } from './dto';

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

  @Post('forgot-password')
  async forgotPassword(@Body() dto: ForgotPasswordDto) {
    return {
      success: true,
      message: `Password reset link generated for ${dto.email}`,
    };
  }

  @Post('reset-password')
  async resetPassword(@Body() dto: ResetPasswordDto) {
    return {
      success: true,
      message: 'Password reset successful',
    };
  }

  @Post('verify-2fa')
  async verify2fa(@Body() dto: VerifyTwoFactorDto) {
    return {
      success: true,
      message: 'Two-factor verification successful',
    };
  }

  @Post('setup-2fa')
  async setup2fa(@Body() body: { userId: string }) {
    return {
      secret: 'JBSWY3DPEHPK3PXP',
      qrCodeUrl: 'otpauth://totp/CreditCheck:user@example.com?secret=JBSWY3DPEHPK3PXP&issuer=CreditCheck',
      recoveryCodes: ['ABCD', 'EFGH', 'IJKL'],
    };
  }

  @Post('disable-2fa')
  async disable2fa(@Body() body: any) {
    return { success: true, message: '2FA disabled' };
  }

  @Post('logout')
  async logout() {
    return { success: true, message: 'Logged out' };
  }

  @Post('refresh')
  async refreshToken() {
    return {
      accessToken: 'demo-access-token-refreshed',
      refreshToken: 'demo-refresh-token',
    };
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
