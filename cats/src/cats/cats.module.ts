import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';

@Module({
  imports: [PrismaModule],
  controllers: [CatsController],
  providers: [CatsService]
})
export class CatsModule {}
