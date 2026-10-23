import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../common/guards/auth.guard';
import { RolesGuard, Roles, Permissions } from '../common/guards/roles.guard';
import { permissions } from '../common/permission.constants';

export class RecovaIntegrationDto {
  name!: string;
  environment?: string;
  baseUrl!: string;
  apiKey?: string;
}

@Controller('api/v1/recovapro')
@UseGuards(AuthGuard, RolesGuard)
export class RecovaProController {
  @Post('integrations')
  @Roles('Super Admin', 'Admin')
  @Permissions(permissions.INTEGRATION_MANAGE)
  createIntegration(@Body() dto: RecovaIntegrationDto) {
    return { message: 'Integration created', integration: dto };
  }

  @Get('integrations/:id')
  @Roles('Super Admin', 'Admin')
  @Permissions(permissions.INTEGRATION_MANAGE)
  getIntegration(@Param('id') id: string) {
    return { id, name: 'Primary RecovaPro', environment: 'sandbox', status: 'connected' };
  }

  @Patch('integrations/:id')
  @Roles('Super Admin', 'Admin')
  @Permissions(permissions.INTEGRATION_MANAGE)
  updateIntegration(@Param('id') id: string, @Body() dto: Partial<RecovaIntegrationDto>) {
    return { message: 'Integration updated', id, ...dto };
  }

  @Post('requests')
  @Roles('Super Admin', 'Admin', 'Support Agent')
  @Permissions(permissions.REPORT_CREATE)
  createRequest(@Body() dto: any) {
    return { message: 'RecovaPro request created', reference: 'RP-1001', status: 'pending', payload: dto };
  }

  @Get('requests')
  @Roles('Super Admin', 'Admin', 'Support Agent')
  @Permissions(permissions.REPORT_VIEW)
  listRequests() {
    return { data: [{ reference: 'RP-1001', status: 'completed' }] };
  }

  @Get('requests/:id')
  @Roles('Super Admin', 'Admin', 'Support Agent')
  @Permissions(permissions.REPORT_VIEW)
  getRequest(@Param('id') id: string) {
    return { id, reference: 'RP-1001', status: 'completed' };
  }

  @Post('webhook')
  @Roles('Super Admin', 'Admin')
  @Permissions(permissions.INTEGRATION_MANAGE)
  webhook(@Body() payload: any) {
    return { received: true, payload };
  }

  @Get('status/:reference')
  @Roles('Super Admin', 'Admin', 'Support Agent')
  @Permissions(permissions.REPORT_VIEW)
  status(@Param('reference') reference: string) {
    return { reference, status: 'completed', updatedAt: new Date().toISOString() };
  }
}

import { Module } from '@nestjs/common';

@Module({
  controllers: [RecovaProController],
})
export class RecovaProModule {}
