import { Module } from '@nestjs/common';
import { NomenclatorController } from './nomenclator.controller';
import { NomenclatorService } from './nomenclator.service';

@Module({
  controllers: [NomenclatorController],
  providers: [NomenclatorService]
})
export class NomenclatorModule {}
