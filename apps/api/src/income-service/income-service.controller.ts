import { Controller, Get, Post, Body, Patch, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Income Service')
@Controller('api/v1/income-service')
export class IncomeServiceController {
  @Post('verification')
  createVerification(@Body() body: any) {
    return { success: true, verification: { id: 'inc_1', reference: 'INC-101', status: 'pending', ...body } };
  }

  @Get('verification')
  listVerification(@Query('status') status?: string) {
    return [
      { id: 'inc_1', reference: 'INC-101', status: status || 'pending' },
      { id: 'inc_2', reference: 'INC-102', status: 'approved' },
    ];
  }

  @Get('verification/:id')
  getVerification(@Param('id') string) {
    return { id, reference: 'INC-101', status: 'approved', payload: { verified: true } };
  }

  @Patch('verification/:id/status')
  updateStatus(@Param('id') string, @Body() body: any) {
    return { success: true, id, status: body.status || 'approved' };
  }
}
