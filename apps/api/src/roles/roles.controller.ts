import { Controller, Get, Post, Patch, Body, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../common/guards/auth.guard';
import { RolesGuard, Roles, Permissions } from '../common/guards/roles.guard';
import { permissions } from '../common/permission.constants';

export class CreateRoleDto {
  name!: string;
  description?: string;
}

@Controller('api/v1/roles')
@UseGuards(AuthGuard, RolesGuard)
export class RolesController {
  @Get()
  @Roles('Super Admin', 'Admin')
  @Permissions(permissions.USER_VIEW)
  findAll() {
    return {
      data: [
        { id: 'role_1', name: 'Super Admin', description: 'Full platform access' },
        { id: 'role_2', name: 'Admin', description: 'Operational admin access' },
        { id: 'role_3', name: 'Support Agent', description: 'Support operations access' },
      ],
    };
  }

  @Post()
  @Roles('Super Admin')
  @Permissions(permissions.USER_CREATE)
  create(@Body() dto: CreateRoleDto) {
    return { message: 'Role created', role: dto };
  }

  @Patch(':id')
  @Roles('Super Admin')
  @Permissions(permissions.USER_UPDATE)
  update(@Param('id') id: string, @Body() dto: Partial<CreateRoleDto>) {
    return { message: 'Role updated', id, ...dto };
  }

  @Get('permissions')
  @Roles('Super Admin', 'Admin')
  @Permissions(permissions.USER_VIEW)
  permissionsList() {
    return { data: Object.values(permissions) };
  }
}

import { Module } from '@nestjs/common';

@Module({
  controllers: [RolesController],
})
export class RolesModule {}
