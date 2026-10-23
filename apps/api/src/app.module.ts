import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { SecurityModule } from './security/security.module';
import { RecovaProModule } from './recovapro/recovapro.module';
import { ConsumerReportingModule } from './consumer-reporting/consumer-reporting.module';
import { IncomeServiceModule } from './income-service/income-service.module';
import { AuditModule } from './audit/audit.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    RolesModule,
    SecurityModule,
    RecovaProModule,
    ConsumerReportingModule,
    IncomeServiceModule,
    AuditModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
