import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrganismojurisdiccionalService } from './organismojurisdiccional.service';
import {
  CreateOrganismojurisdiccionalDto,
  UpdateOrganismojurisdiccionalDto,
} from './dto/';

import { ApiTags } from '@nestjs/swagger';

@ApiTags('organismojurisdiccional')
@Controller('organismojurisdiccional')
export class OrganismojurisdiccionalController {
  constructor(
    private readonly organismojurisdiccionalService: OrganismojurisdiccionalService,
  ) {}

  @Post()
  create(
    @Body() createOrganismojurisdiccionalDto: CreateOrganismojurisdiccionalDto,
  ) {
    return this.organismojurisdiccionalService.create(
      createOrganismojurisdiccionalDto,
    );
  }

  @Get()
  findAll() {
    return this.organismojurisdiccionalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.organismojurisdiccionalService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrganismojurisdiccionalDto: UpdateOrganismojurisdiccionalDto,
  ) {
    return this.organismojurisdiccionalService.update(
      +id,
      updateOrganismojurisdiccionalDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.organismojurisdiccionalService.remove(+id);
  }
}
