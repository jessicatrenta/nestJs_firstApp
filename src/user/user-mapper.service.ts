/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UserMapperService {

  public modelToDto({ id, firstName, lastName, nickName, icon }: User): User {
    return new User({ id, firstName, lastName, nickName, icon });
  }

}
