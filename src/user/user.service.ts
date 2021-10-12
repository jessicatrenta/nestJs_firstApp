/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserMapperService } from './user-mapper.service';
import { User } from './user.entity';

@Injectable()
export class UserService {

    private userDb: User[] = [];

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        private userMapper: UserMapperService
    ) { }

    public async findAll(): Promise<User[]> {
        const user = await this.userRepository.find();
        return user.map(this.userMapper.modelToDto);
      }

    async getUsers(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async getUser(userId: number): Promise<User[]> {
        return await this.userRepository.find({
            select: ["id", "firstName", "lastName"],
            where: [{ "id": userId }]
        });
    }

    async createUser(user: User) {
        return await this.userRepository.save(user);
    }

    async updateUser(user: User) {
        return await this.userRepository.update( { 'id': user.id }, user);
    }

    async deleteUser(user: User) {
        this.userRepository.delete(user);
    }

}

