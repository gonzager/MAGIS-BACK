import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateOrganismojurisdiccionalDto,
  UpdateOrganismojurisdiccionalDto,
} from './dto/';
import { OrganismoJurisdiccional } from './entities/';

@Injectable()
export class OrganismojurisdiccionalService {
  constructor(
    @InjectRepository(OrganismoJurisdiccional)
    private readonly organismoJurisdiccionalRepository: Repository<OrganismoJurisdiccional>,
  ) {}

  create(createOrganismojurisdiccionalDto: CreateOrganismojurisdiccionalDto) {
    return 'This action adds a new organismojurisdiccional';
  }

  findAll() {
    return this.organismoJurisdiccionalRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} organismojurisdiccional`;
  }

  update(
    id: number,
    updateOrganismojurisdiccionalDto: UpdateOrganismojurisdiccionalDto,
  ) {
    return `This action updates a #${id} organismojurisdiccional`;
  }

  remove(id: number) {
    return `This action removes a #${id} organismojurisdiccional`;
  }
}
