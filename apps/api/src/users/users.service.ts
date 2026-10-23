import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll() {
    return [
      { id: 'user_1', email: 'admin@creditcheck.africa', name: 'Ada Johnson', role: 'Super Admin', status: 'active', mfaEnabled: true },
      { id: 'user_2', email: 'ops@creditcheck.africa', name: 'Peter Smith', role: 'Admin', status: 'active', mfaEnabled: true },
      { id: 'user_3', email: 'support@creditcheck.africa', name: 'Aisha Bello', role: 'Support Agent', status: 'inactive', mfaEnabled: false },
    ];
  }

  findById(id: string) {
    return {
      id,
      name: 'Ada Johnson',
      email: 'admin@creditcheck.africa',
      role: 'Super Admin',
      status: 'active',
      mfaEnabled: true,
      lastLoginAt: new Date().toISOString(),
      mustChangePassword: false,
    };
  }

  createUser(payload: any) {
    return {
      success: true,
      message: 'User created successfully',
      user: {
        id: 'user_new',
        ...payload,
        defaultPassword: 'Temp@1234',
        status: 'active',
      },
    };
  }

  updateUser(id: string, payload: any) {
    return { success: true, id, ...payload };
  }

  lockUser(id: string) {
    return { success: true, id, status: 'locked' };
  }

  unlockUser(id: string) {
    return { success: true, id, status: 'active' };
  }

  forcePasswordReset(id: string) {
    return { success: true, id, message: 'Password reset required on next login' };
  }

  resetMfa(id: string) {
    return { success: true, id, message: '2FA reset successfully; user must reconfigure' };
  }

  generateResetLink(id: string) {
    return {
      success: true,
      id,
      resetLink: `https://portal.creditcheck.africa/reset?token=demo-${id}`,
      expiresAt: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
    };
  }
}
