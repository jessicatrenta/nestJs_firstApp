/* eslint-disable prettier/prettier */

import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { Entity } from "typeorm/decorator/entity/Entity";

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  description: string;

  @Column()
  amount: number;

  @Column()
  categoryId: number;

  @Column()
  expenceDate: Date;

  @Column()
  expencePlace: String;

  public constructor(opts?: Partial<Transaction>) {
    Object.assign(this, opts);
  }
}