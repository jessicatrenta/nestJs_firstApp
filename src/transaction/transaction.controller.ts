/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { All, Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Req } from '@nestjs/common';
import { Transaction } from './transaction.entity';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
    constructor(private service: TransactionService) { }
    
    @Get()
    public findAll(): Promise<Transaction[]> {
        return this.service.findAll();
    }

    @Get(':transactionId')
    get(@Param() params) {
        console.log('Get(:transactionId) ');
        return this.service.getTransaction(params.transactionId);
    }

    @Post()
    create(@Body() transaction: Transaction) {
        return this.service.createTransaction(transaction);
    }

    @Put()
    update(@Body() transaction: Transaction) {
        return this.service.updateTransaction(transaction);
    }

    @Delete(':transactionId')
    deleteUser(@Param() params) {
        return this.service.deleteTransaction(params.transactionId);
    }

}
