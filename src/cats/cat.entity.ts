/* eslint-disable prettier/prettier */

import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { Entity } from "typeorm/decorator/entity/Entity";

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  catId: number;

  @Column()
  catName: string;

  @Column()
  catGender: string;

  @Column()
  catBirthDate: Date;

  @Column()
  catDescription: string;

  public constructor(opts?: Partial<Cat>) {
    Object.assign(this, opts);
  }
}