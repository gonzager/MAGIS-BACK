import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CargoDto, CreateCargoDto, UpdateCargoDto } from './dto/';
import { Cargo } from './entities/';

import { PageDto, PageMetaDto, PageOptionsDto } from '../../common/dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class CargoService {
  constructor(
    @InjectRepository(Cargo)
    private readonly cargoRepository: Repository<Cargo>,
  ) {}

  async create(createCargoDto: CreateCargoDto) {
    const cargo = this.cargoRepository.save(createCargoDto);
    return cargo;
  }

  async findAll(pageOptionsDto: PageOptionsDto): Promise<PageDto<CargoDto>> {
    const [cargos, itemCount] = await this.cargoRepository.findAndCount({
      relations: {
        tipoCargo: true,
        fuero: true,
        organismoJurisdiccional: true,
        departamentoJudicial: true,
        estadoCargo: true,
      },
      take: pageOptionsDto.take,
      skip: pageOptionsDto.skip,
      order: { createdAt: pageOptionsDto.order },
    });
    const pageMetaDto = new PageMetaDto({
      pageOptionsDto,
      itemCount,
    });
    return new PageDto(
      cargos.map((c) => plainToClass(CargoDto, c)),
      pageMetaDto,
    );
  }

  async findOne(id: number) {
    try {
      return await this.cargoRepository.findOneOrFail({
        relations: {
          tipoCargo: true,
          fuero: true,
          organismoJurisdiccional: true,
          departamentoJudicial: true,
          estadoCargo: true,
        },
        where: { id },
      });
    } catch (err) {
      throw new NotFoundException();
    }
  }

  update(id: number, updateCargoDto: UpdateCargoDto) {
    return `This action updates a #${id} cargo`;
  }

  remove(id: number) {
    return `This action removes a #${id} cargo`;
  }
}
