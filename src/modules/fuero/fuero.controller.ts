import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FueroService } from './fuero.service';
import { CreateFueroDto, UpdateFueroDto } from './dto/';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('fuero')
@Controller('fuero')
export class FueroController {
  constructor(private readonly fueroService: FueroService) {}

  @Post()
  create(@Body() createFueroDto: CreateFueroDto) {
    return this.fueroService.create(createFueroDto);
  }

  @Get()
  findAll() {
    return this.fueroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fueroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFueroDto: UpdateFueroDto) {
    return this.fueroService.update(+id, updateFueroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fueroService.remove(+id);
  }
}
