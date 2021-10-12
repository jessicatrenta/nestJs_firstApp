/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransactionMapperService } from './transaction-mapper.service';
import { Transaction } from './transaction.entity';

@Injectable()
export class TransactionService {

    private transactionsDb: Transaction[] = [];

    constructor(
        @InjectRepository(Transaction) private transationRepository: Repository<Transaction>,
        private transationMapper: TransactionMapperService
    ) { }

    public async findAll(): Promise<Transaction[]> {
        const transations = await this.transationRepository.find();
        return transations.map(this.transationMapper.modelToDto);
      }

    async getTransactions(): Promise<Transaction[]> {
        return await this.transationRepository.find();
    }

    async getTransaction(id: number): Promise<Transaction[]> {
        return await this.transationRepository.find({
            select: ["id", "userId", "description", "amount"],
            where: [{ "id": id }]
        });
    }

    async createTransaction(transation: Transaction) {
        return await this.transationRepository.save(transation);
    }

    async updateTransaction(transation: Transaction) {
        return await this.transationRepository.update( { 'id': transation.id }, transation);
    }

    async deleteTransaction(transation: Transaction) {
        this.transationRepository.delete(transation);
    }

}

