import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CargoService } from './cargo.service';
import { CargoDto, CreateCargoDto, UpdateCargoDto } from './dto/';
import { PageDto, PageOptionsDto } from '../../common/dto';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { plainToClass } from 'class-transformer';

@ApiTags('cargo')
@Controller('cargo')
export class CargoController {
  constructor(private readonly cargoService: CargoService) {}

  @ApiOperation({ summary: 'Crea un Cargo' })
  @ApiResponse({ status: 201, description: 'Created' })
  @Post()
  create(@Body() createCargoDto: CreateCargoDto) {
    return this.cargoService.create(createCargoDto);
  }

  @ApiOperation({ summary: 'Recupera un lista de cargos' })
  @ApiResponse({ status: 200, description: 'OK', type: PageDto<CargoDto> })
  @Get()
  findAll(@Query() pageOptionsDto: PageOptionsDto) {
    return this.cargoService.findAll(pageOptionsDto);
  }

  @ApiOperation({ summary: 'Recuera un cargo' })
  @ApiResponse({ status: 200, description: 'OK', type: CargoDto })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CargoDto> {
    return plainToClass(CargoDto, await this.cargoService.findOne(+id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCargoDto: UpdateCargoDto) {
    return this.cargoService.update(+id, updateCargoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cargoService.remove(+id);
  }
}
