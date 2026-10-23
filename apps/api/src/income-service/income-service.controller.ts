import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../common/guards/auth.guard';
import { RolesGuard, Roles, Permissions } from '../common/guards/roles.guard';
import { permissions } from '../common/permission.constants';

export class IncomeVerificationDto {
  applicantId!: string;
  employerName!: string;
}

@Controller('api/v1/income-service')
@UseGuards(AuthGuard, RolesGuard)
export class IncomeServiceController {
  @Post('verification')
  @Roles('Super Admin', 'Admin', 'Finance / Operations')
  @Permissions(permissions.INCOME_UPDATE)
  createVerification(@Body() dto: IncomeVerificationDto) {
    return { message: 'Income verification initiated', reference: 'INC-201', payload: dto };
  }

  @Get('verification')
  @Roles('Super Admin', 'Admin', 'Finance / Operations')
  @Permissions(permissions.INCOME_VIEW)
  listVerifications() {
    return { data: [{ id: 'INC-201', status: 'approved' }] };
  }

  @Get('verification/:id')
  @Roles('Super Admin', 'Admin', 'Finance / Operations')
  @Permissions(permissions.INCOME_VIEW)
  getVerification(@Param('id') id: string) {
    return { id, status: 'approved', employerName: 'CreditCheck Labs' };
  }

  @Patch('verification/:id/status')
  @Roles('Super Admin', 'Admin', 'Finance / Operations')
  @Permissions(permissions.INCOME_UPDATE)
  updateStatus(@Param('id') id: string, @Body('status') status: string) {
    return { message: 'Verification status updated', id, status };
  }
}

import { Module } from '@nestjs/common';

@Module({
  controllers: [IncomeServiceController],
})
export class IncomeServiceModule {}
