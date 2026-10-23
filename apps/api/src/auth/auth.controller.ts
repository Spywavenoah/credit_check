import { Injectable, Controller, Post, Body, Req, UseGuards } from '@nestjs/common';
import { Public, AuthGuard } from '../common/guards/auth.guard';

export class LoginDto {
  email!: string;
  password!: string;
}

export class RefreshDto {
  refreshToken!: string;
}

export class ForgotPasswordDto {
  email!: string;
}

export class ResetPasswordDto {
  token!: string;
  password!: string;
}

@Injectable()
export class AuthService {
  async login(dto: LoginDto) {
    return {
      message: 'Login successful',
      user: { email: dto.email, role: 'Super Admin' },
      accessToken: 'demo-access-token',
      refreshToken: 'demo-refresh-token',
    };
  }

  async refresh(dto: RefreshDto) {
    return {
      accessToken: 'demo-access-token',
      refreshToken: dto.refreshToken || 'demo-refresh-token',
    };
  }

  async forgotPassword(dto: ForgotPasswordDto) {
    return {
      message: `Password reset email sent to ${dto.email}`,
      resetToken: 'demo-reset-token',
    };
  }

  async resetPassword(dto: ResetPasswordDto) {
    return {
      message: 'Password reset successful',
      token: dto.token,
    };
  }

  async setup2FA() {
    return {
      message: '2FA setup initiated',
      secret: 'JBSWY3DPEHPK3PXP',
      otpauthUrl: 'otpauth://totp/CreditCheck:admin@creditcheck.africa?secret=JBSWY3DPEHPK3PXP&issuer=CreditCheck',
    };
  }

  async verify2FA(code: string) {
    return {
      message: '2FA verified',
      valid: code.length >= 6,
    };
  }

  async disable2FA() {
    return { message: '2FA disabled' };
  }

  async me() {
    return {
      id: 'user_1',
      name: 'System Admin',
      email: 'admin@creditcheck.africa',
      role: 'Super Admin',
      status: 'ACTIVE',
      isDefaultPassword: false,
      isTwoFactorEnabled: true,
    };
  }
}

@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Public()
  @Post('refresh')
  async refresh(@Body() dto: RefreshDto) {
    return this.authService.refresh(dto);
  }

  @Public()
  @Post('forgot-password')
  async forgotPassword(@Body() dto: ForgotPasswordDto) {
    return this.authService.forgotPassword(dto);
  }

  @Public()
  @Post('reset-password')
  async resetPassword(@Body() dto: ResetPasswordDto) {
    return this.authService.resetPassword(dto);
  }

  @Post('setup-2fa')
  async setup2FA() {
    return this.authService.setup2FA();
  }

  @Post('verify-2fa')
  async verify2FA(@Body('code') code: string) {
    return this.authService.verify2FA(code);
  }

  @Post('disable-2fa')
  async disable2FA() {
    return this.authService.disable2FA();
  }

  @Post('logout')
  async logout() {
    return { message: 'Logged out successfully' };
  }

  @Get('me')
  async me() {
    return this.authService.me();
  }
}
