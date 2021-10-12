/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryModule } from './category.module';
import { CategoryService } from './category.service';

@Module({
  imports: [CategoryModule],
  providers: [CategoryService],
  controllers: [CategoryController]
})
export class CategoryHttpModule {}
