import { Module } from '@nestjs/common';
import { ConsumerReportingController } from './consumer-reporting.controller';
import { ConsumerReportingService } from './consumer-reporting.service';

@Module({
  controllers: [ConsumerReportingController],
  providers: [ConsumerReportingService],
  exports: [ConsumerReportingService],
})
export class ConsumerReportingModule {}
