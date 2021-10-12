/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsModule } from './cats.module';
import { CatsService } from './cats.service';

@Module({
  imports: [CatsModule],
  providers: [CatsService],
  controllers: [CatsController]
})
export class CatsHttpModule {}
