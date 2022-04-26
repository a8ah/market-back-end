import { PrismaService } from 'src/prisma/prisma.service';

export class BaseService {
  constructor(private prisma: PrismaService) {}

  // async create(dto: any,object:any) {
  //   const entity = await this.prisma.object.create({
  //     data: {
  //       ...
  //     },
  //   });
  //   return { msg: `Succesfuly created ${entity}` };
  // }
}
