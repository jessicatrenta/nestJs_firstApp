/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Transaction } from "./transaction.entity";

@Injectable()
export class TransactionMapperService {

  public modelToDto({ id, userId, description, amount, categoryId, expenceDate }: Transaction): Transaction {
    return new Transaction({ id, userId, description, amount, categoryId, expenceDate });
  }

}
