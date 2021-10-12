/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { All, Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Req } from '@nestjs/common';
import { Cat } from './cat.entity';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private service: CatsService) { }
    
    @Get()
    public findAll(): Promise<Cat[]> {
        return this.service.findAll();
    }

    @Get(':catId')
    get(@Param() params) {
        console.log('Get(:catId) ');
        return this.service.getCat(params.catId);
    }

    @Post()
    create(@Body() cat: Cat) {
        return this.service.createCat(cat);
    }

    @Put()
    update(@Body() cat: Cat) {
        return this.service.updateCat(cat);
    }

    @Delete(':catId')
    deleteUser(@Param() params) {
        return this.service.deleteCat(params.catId);
    }

}
