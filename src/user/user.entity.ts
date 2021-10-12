/* eslint-disable prettier/prettier */

import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { Entity } from "typeorm/decorator/entity/Entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  nickName: string;

  @Column()
  icon: string;

  public constructor(opts?: Partial<User>) {
    Object.assign(this, opts);
  }
}