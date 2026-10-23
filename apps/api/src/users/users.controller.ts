import { Controller, Delete, Get, Param, Patch, Post, Body, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../common/guards/auth.guard';
import { RolesGuard, Roles, Permissions } from '../common/guards/roles.guard';
import { permissions } from '../common/permission.constants';

export class CreateUserDto {
  email!: string;
  name!: string;
  role!: string;
  password?: string;
}

export class UpdateUserDto {
  name?: string;
  status?: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED' | 'LOCKED';
  role?: string;
}

@Controller('api/v1/users')
@UseGuards(AuthGuard, RolesGuard)
export class UsersController {
  @Get()
  @Roles('Super Admin', 'Admin')
  @Permissions(permissions.USER_VIEW)
  findAll() {
    return {
      data: [
        { id: 'user_1', name: 'System Admin', email: 'admin@creditcheck.africa', role: 'Super Admin', status: 'ACTIVE' },
        { id: 'user_2', name: 'Ops Officer', email: 'ops@creditcheck.africa', role: 'Finance / Operations', status: 'ACTIVE' },
      ],
    };
  }

  @Get(':id')
  @Roles('Super Admin', 'Admin')
  @Permissions(permissions.USER_VIEW)
  findOne(@Param('id') id: string) {
    return { id, name: 'Sample User', email: 'sample@creditcheck.africa', role: 'Support Agent', status: 'ACTIVE' };
  }

  @Post()
  @Roles('Super Admin', 'Admin')
  @Permissions(permissions.USER_CREATE)
  create(@Body() dto: CreateUserDto) {
    return { message: 'User created', user: dto };
  }

  @Patch(':id')
  @Roles('Super Admin', 'Admin')
  @Permissions(permissions.USER_UPDATE)
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return { message: 'User updated', id, ...dto };
  }

  @Delete(':id')
  @Roles('Super Admin')
  @Permissions(permissions.USER_DELETE)
  remove(@Param('id') id: string) {
    return { message: 'User deleted', id };
  }

  @Patch(':id/lock')
  @Roles('Super Admin', 'Admin')
  @Permissions(permissions.SECURITY_MANAGE)
  lock(@Param('id') id: string) {
    return { message: 'User locked', id };
  }

  @Patch(':id/unlock')
  @Roles('Super Admin', 'Admin')
  @Permissions(permissions.SECURITY_MANAGE)
  unlock(@Param('id') id: string) {
    return { message: 'User unlocked', id };
  }

  @Patch(':id/force-password-reset')
  @Roles('Super Admin', 'Admin')
  @Permissions(permissions.SECURITY_MANAGE)
  forcePasswordReset(@Param('id') id: string) {
    return { message: 'Password reset forced for user', id };
  }

  @Post(':id/reset-2fa')
  @Roles('Super Admin', 'Admin')
  @Permissions(permissions.USER_RESET_MFA)
  reset2FA(@Param('id') id: string) {
    return { message: '2FA reset', id };
  }

  @Post(':id/generate-password-reset-link')
  @Roles('Super Admin', 'Admin')
  @Permissions(permissions.SECURITY_MANAGE)
  generatePasswordResetLink(@Param('id') id: string) {
    return { message: 'Password reset link generated', id, link: `https://app.creditcheck.africa/reset-password?token=demo-${id}` };
  }

  @Get(':id/activity')
  @Roles('Super Admin', 'Admin')
  @Permissions(permissions.AUDIT_VIEW)
  getActivity(@Param('id') id: string) {
    return { userId: id, activity: [{ action: 'login', at: new Date().toISOString() }] };
  }
}

import { Module } from '@nestjs/common';

@Module({
  controllers: [UsersController],
})
export class UsersModule {}
