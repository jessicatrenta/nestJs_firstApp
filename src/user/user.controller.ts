/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { All, Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Req } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private service: UserService) { }
    
    @Get()
    public findAll(): Promise<User[]> {
        return this.service.findAll();
    }

    @Get(':id')
    get(@Param() params) {
        console.log('Get(:id) ');
        return this.service.getUser(params.id);
    }

    @Post()
    create(@Body() user: User) {
        return this.service.createUser(user);
    }

    @Put()
    update(@Body() user: User) {
        return this.service.updateUser(user);
    }

    @Delete(':userId')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }

}
