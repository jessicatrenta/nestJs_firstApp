/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Category } from "./category.entity";

@Injectable()
export class CategoryMapperService {

  public modelToDto({ name, id, icon, budget }: Category): Category {
    return new Category({ name, id, icon, budget });
  }

}
