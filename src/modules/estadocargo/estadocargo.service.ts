import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEstadocargoDto, UpdateEstadocargoDto } from './dto/';
import { EstadoCargo } from './entities/';

@Injectable()
export class EstadocargoService {
  constructor(
    @InjectRepository(EstadoCargo)
    private readonly estadoCargoRespository: Repository<EstadoCargo>,
  ) {}
  create(createEstadocargoDto: CreateEstadocargoDto) {
    return 'This action adds a new estadocargo';
  }

  findAll() {
    return this.estadoCargoRespository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} estadocargo`;
  }

  update(id: number, updateEstadocargoDto: UpdateEstadocargoDto) {
    return `This action updates a #${id} estadocargo`;
  }

  remove(id: number) {
    return `This action removes a #${id} estadocargo`;
  }
}
