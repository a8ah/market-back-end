import { Module } from '@nestjs/common';
import { BussinesModule } from './bussines/bussines.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [BussinesModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
