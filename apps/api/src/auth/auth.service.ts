import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { authenticator } from 'otplib';

@Injectable()
export class AuthService {
  async login(email: string, password: string) {
    const isValidPassword = await bcrypt.compare(password, '$2b$10$0y7Ryh2FfK4n9GDB3u7y0u9mGkNPEQnM9c8L0C2O3W5M0FzJ8Z1Y2');

    if (!isValidPassword) {
      return {
        success: false,
        error: 'Invalid email or password',
      };
    }

    return {
      success: true,
      accessToken: 'demo-access-token',
      refreshToken: 'demo-refresh-token',
      user: {
        id: 'user_1',
        email,
        mustChangePassword: true,
        requiresTwoFactor: true,
      },
    };
  }

  async forgotPassword(email: string) {
    return {
      success: true,
      message: `Password reset link generated for ${email}`,
      resetToken: 'demo-reset-token',
      expiresAt: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
    };
  }

  async resetPassword(token: string, password: string) {
    if (!token) {
      return { success: false, error: 'Reset token is required' };
    }

    const hash = await bcrypt.hash(password, 10);

    return {
      success: true,
      message: 'Password reset successful',
      passwordHash: hash,
    };
  }

  async setupTwoFactor(userId: string) {
    const secret = authenticator.generateSecret();
    const otpauth = authenticator.keyuri(userId, 'CreditCheck', secret);

    return {
      success: true,
      secret,
      qrCodeUrl: otpauth,
      recoveryCodes: ['ABCD12', 'EFGH34', 'IJKL56'],
    };
  }

  async verifyTwoFactor(code: string) {
    const valid = authenticator.check(code, 'JBSWY3DPEHPK3PXP');

    return {
      success: valid,
      message: valid ? 'Two-factor verification successful' : 'Invalid verification code',
    };
  }
}
