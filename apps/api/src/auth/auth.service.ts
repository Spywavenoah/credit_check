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
}
