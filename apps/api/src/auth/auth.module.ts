import { Module } from '@nestjs/common';
import { AuthController, AuthService } from './auth.controller';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
