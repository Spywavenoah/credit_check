import { Injectable } from '@nestjs/common';

@Injectable()
export class RecovaProService {
  async createRequest(payload: any) {
    return { success: true, request: { id: 'req_1', reference: 'REC-1001', status: 'pending', payload } };
  }
}
