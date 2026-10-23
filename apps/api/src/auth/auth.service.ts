import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async login(email: string, password: string) {
    return {
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

  async setupTwoFactor(userId: string) {
    return {
      secret: 'JBSWY3DPEHPK3PXP',
      qrCodeUrl: 'otpauth://totp/CreditCheck:user@example.com?secret=JBSWY3DPEHPK3PXP&issuer=CreditCheck',
      recoveryCodes: ['ABCD', 'EFGH', 'IJKL'],
    };
  }
}
