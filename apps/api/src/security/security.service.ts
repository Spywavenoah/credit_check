import { Injectable } from '@nestjs/common';

@Injectable()
export class SecurityService {
  async changePassword() {
    return { success: true };
  }
}
