/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CatMapperService } from './cat-mapper.service';
import { Cat } from './cat.entity';

@Injectable()
export class CatsService {

    private catsDb: Cat[] = [];

    constructor(
        @InjectRepository(Cat) private catsRepository: Repository<Cat>,
        private catMapper: CatMapperService
    ) { }

    public async findAll(): Promise<Cat[]> {
        const cats = await this.catsRepository.find();
        return cats.map(this.catMapper.modelToDto);
      }

    async getCats(): Promise<Cat[]> {
        return await this.catsRepository.find();
    }

    async getCat(catId: number): Promise<Cat[]> {
        return await this.catsRepository.find({
            select: ["catId", "catName", "catGender"],
            where: [{ "catId": catId }]
        });
    }

    async createCat(cat: Cat) {
        return await this.catsRepository.save(cat);
    }

    async updateCat(cat: Cat) {
        return await this.catsRepository.update( { 'catId': cat.catId }, cat);
    }

    async deleteCat(cat: Cat) {
        this.catsRepository.delete(cat);
    }

}

