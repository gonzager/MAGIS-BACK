import { PartialType } from '@nestjs/mapped-types';
import { CreateOrganismojurisdiccionalDto } from './create-organismojurisdiccional.dto';

export class UpdateOrganismojurisdiccionalDto extends PartialType(
  CreateOrganismojurisdiccionalDto,
) {}
