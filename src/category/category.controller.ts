/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { All, Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Req } from '@nestjs/common';
import { Category } from './category.entity';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(private service: CategoryService) { }
    
    @Get()
    public findAll(): Promise<Category[]> {
        return this.service.findAll();
    }

    @Get(':categoryId')
    get(@Param() params) {
        console.log('Get(:categoryId) ');
        return this.service.getCategory(params.categoryId);
    }

    @Post()
    create(@Body() category: Category) {
        return this.service.createCategory(category);
    }

    @Put()
    update(@Body() category: Category) {
        return this.service.updateCategory(category);
    }

    @Delete(':categoryId')
    deleteUser(@Param() params) {
        return this.service.deleteCategory(params.categoryId);
    }

}
