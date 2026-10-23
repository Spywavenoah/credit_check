import { Injectable } from '@nestjs/common';

@Injectable()
export class IncomeServiceService {
  async createVerification(payload: any) {
    return { success: true, verification: { id: 'inc_1', reference: 'INC-101', status: 'pending', payload } };
  }
}
