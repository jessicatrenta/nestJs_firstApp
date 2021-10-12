/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Cat } from "./cat.entity";

@Injectable()
export class CatMapperService {

  public modelToDto({ catId, catName, catGender, catBirthDate, catDescription }: Cat): Cat {
    return new Cat({ catId, catName, catGender, catBirthDate, catDescription });
  }

}
