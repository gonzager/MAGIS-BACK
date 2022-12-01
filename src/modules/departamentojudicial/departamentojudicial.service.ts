import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateDepartamentojudicialDto,
  UpdateDepartamentojudicialDto,
} from './dto/';
import { DepartamentoJudicial } from './entities/departamentojudicial.entity';

@Injectable()
export class DepartamentojudicialService {
  constructor(
    @InjectRepository(DepartamentoJudicial)
    private readonly departamentoJudicialRepository: Repository<DepartamentoJudicial>,
  ) {}
  create(createDepartamentojudicialDto: CreateDepartamentojudicialDto) {
    return 'This action adds a new departamentojudicial';
  }

  findAll() {
    return this.departamentoJudicialRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} departamentojudicial`;
  }

  update(id: number, updateDepartamentojudicialDto: UpdateDepartamentojudicialDto) {
    return `This action updates a #${id} departamentojudicial`;
  }

  remove(id: number) {
    return `This action removes a #${id} departamentojudicial`;
  }
}
