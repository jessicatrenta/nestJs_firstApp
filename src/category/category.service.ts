/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryMapperService } from './category-mapper.service';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {

    private categoryDb: Category[] = [];

    constructor(
        @InjectRepository(Category) private categoryRepository: Repository<Category>,
        private CategoryMapper: CategoryMapperService
    ) { }

    public async findAll(): Promise<Category[]> {
        const categories = await this.categoryRepository.find();
        return categories.map(this.CategoryMapper.modelToDto);
      }

    async getCategories(): Promise<Category[]> {
        return await this.categoryRepository.find();
    }

    async getCategory(categoryId: number): Promise<Category[]> {
        return await this.categoryRepository.find({
            select: ["id", "name", "icon"],
            where: [{ "id": categoryId }]
        });
    }

    async createCategory(category: Category) {
        return await this.categoryRepository.save(category);
    }

    async updateCategory(category: Category) {
        return await this.categoryRepository.update( { 'id': category.id }, category);
    }

    async deleteCategory(category: Category) {
        this.categoryRepository.delete(category);
    }

}

