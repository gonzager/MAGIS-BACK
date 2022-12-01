import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DepartamentojudicialService } from './departamentojudicial.service';
import {
  CreateDepartamentojudicialDto,
  UpdateDepartamentojudicialDto,
} from './dto/';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('departamentojudicial')
@Controller('departamentojudicial')
export class DepartamentojudicialController {
  constructor(
    private readonly departamentojudicialService: DepartamentojudicialService,
  ) {}

  @Post()
  create(@Body() createDepartamentojudicialDto: CreateDepartamentojudicialDto) {
    return this.departamentojudicialService.create(
      createDepartamentojudicialDto,
    );
  }

  @Get()
  findAll() {
    return this.departamentojudicialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departamentojudicialService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDepartamentojudicialDto: UpdateDepartamentojudicialDto) {
    return this.departamentojudicialService.update(+id, updateDepartamentojudicialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departamentojudicialService.remove(+id);
  }
}
