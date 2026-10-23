import { Controller, Get, Patch, Post, Body, Param, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../common/guards/auth.guard';
import { RolesGuard, Roles, Permissions } from '../common/guards/roles.guard';
import { permissions } from '../common/permission.constants';

export class ConsumerReportDto {
  consumerId!: string;
  requestType!: string;
}

@Controller('api/v1/consumer-reporting')
@UseGuards(AuthGuard, RolesGuard)
export class ConsumerReportingController {
  @Post('reports')
  @Roles('Super Admin', 'Admin', 'Compliance Officer')
  @Permissions(permissions.REPORT_CREATE)
  createReport(@Body() dto: ConsumerReportDto) {
    return { message: 'Consumer report created', reference: 'CR-1101', payload: dto };
  }

  @Get('reports')
  @Roles('Super Admin', 'Admin', 'Compliance Officer')
  @Permissions(permissions.REPORT_VIEW)
  listReports() {
    return { data: [{ id: 'CR-1101', status: 'pending' }] };
  }

  @Get('reports/:id')
  @Roles('Super Admin', 'Admin', 'Compliance Officer')
  @Permissions(permissions.REPORT_VIEW)
  getReport(@Param('id') id: string) {
    return { id, status: 'approved', consumerId: 'CUST-1' };
  }

  @Patch('reports/:id/status')
  @Roles('Super Admin', 'Admin', 'Compliance Officer')
  @Permissions(permissions.REPORT_UPDATE)
  updateStatus(@Param('id') id: string, @Body('status') status: string) {
    return { message: 'Report status updated', id, status };
  }

  @Post('search')
  @Roles('Super Admin', 'Admin', 'Compliance Officer')
  @Permissions(permissions.REPORT_VIEW)
  search(@Body() payload: any) {
    return { results: [{ consumerId: payload.consumerId || 'CUST-1', status: 'verified' }] };
  }
}

import { Module } from '@nestjs/common';

@Module({
  controllers: [ConsumerReportingController],
})
export class ConsumerReportingModule {}
