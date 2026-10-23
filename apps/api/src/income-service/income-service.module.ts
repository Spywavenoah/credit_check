import { Module } from '@nestjs/common';
import { IncomeServiceController } from './income-service.controller';
import { IncomeServiceService } from './income-service.service';

@Module({
  controllers: [IncomeServiceController],
  providers: [IncomeServiceService],
  exports: [IncomeServiceService],
})
export class IncomeServiceModule {}
