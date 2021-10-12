/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionModule } from './transaction.module';
import { TransactionService } from './transaction.service';

@Module({
  imports: [TransactionModule],
  providers: [TransactionService],
  controllers: [TransactionController]
})
export class TransactionHttpModule {}
