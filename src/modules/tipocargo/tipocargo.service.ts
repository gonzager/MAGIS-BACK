import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTipocargoDto, UpdateTipocargoDto } from './dto/';
import { TipoCargo } from './entities/';

@Injectable()
export class TipocargoService {
  constructor(
    @InjectRepository(TipoCargo)
    private readonly tipoCargoRepository: Repository<TipoCargo>,
  ) {}

  create(_createTipocargoDto: CreateTipocargoDto) {
    return 'This action adds a new tipocargo';
  }

  findAll() {
    return this.tipoCargoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} tipocargo`;
  }

  update(id: number, updateTipocargoDto: UpdateTipocargoDto) {
    return `This action updates a #${id} tipocargo`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipocargo`;
  }
}
