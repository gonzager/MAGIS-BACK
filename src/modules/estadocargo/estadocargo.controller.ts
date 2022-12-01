import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EstadocargoService } from './estadocargo.service';
import { CreateEstadocargoDto, UpdateEstadocargoDto } from './dto/';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('estadocargo')
@Controller('estadocargo')
export class EstadocargoController {
  constructor(private readonly estadocargoService: EstadocargoService) {}

  @Post()
  create(@Body() createEstadocargoDto: CreateEstadocargoDto) {
    return this.estadocargoService.create(createEstadocargoDto);
  }

  @Get()
  findAll() {
    return this.estadocargoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estadocargoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEstadocargoDto: UpdateEstadocargoDto,
  ) {
    return this.estadocargoService.update(+id, updateEstadocargoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estadocargoService.remove(+id);
  }
}
