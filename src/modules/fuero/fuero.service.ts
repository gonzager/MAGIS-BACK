import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateFueroDto, UpdateFueroDto } from './dto/';
import { Fuero } from './entities/';

@Injectable()
export class FueroService {
  constructor(
    @InjectRepository(Fuero)
    private readonly fueroRepository: Repository<Fuero>,
  ) {}

  create(createFueroDto: CreateFueroDto) {
    return this.fueroRepository.save(createFueroDto);
  }

  findAll() {
    return this.fueroRepository.find();
  }

  async findOne(id: number) {
    try {
      return await this.fueroRepository.findOneByOrFail({ id });
    } catch (err) {
      throw new NotFoundException();
    }
  }

  update(id: number, updateFueroDto: UpdateFueroDto) {
    return `This action updates a #${id} fuero`;
  }

  async remove(id: number) {
    const deleteResult = await this.fueroRepository.delete(id);
    if (!deleteResult.affected) {
      throw new NotFoundException();
    }
    return DeleteResult;
  }
}
