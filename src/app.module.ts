import { Module } from '@nestjs/common';
import { BussinesModule } from './bussines/bussines.module';

@Module({
  imports: [BussinesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
