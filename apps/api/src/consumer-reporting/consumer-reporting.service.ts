import { Injectable } from '@nestjs/common';

@Injectable()
export class ConsumerReportingService {
  async createReport(payload: any) {
    return { success: true, report: { id: 'cr_1', reference: 'CR-101', status: 'pending', payload } };
  }
}
