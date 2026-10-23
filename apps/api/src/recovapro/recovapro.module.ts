import { Module } from '@nestjs/common';
import { RecovaProController } from './recovapro.controller';
import { RecovaProService } from './recovapro.service';

@Module({
  controllers: [RecovaProController],
  providers: [RecovaProService],
  exports: [RecovaProService],
})
export class RecovaProModule {}
