import { PartialType } from '@nestjs/mapped-types';
import { CreateDepartamentojudicialDto } from './create-departamentojudicial.dto';

export class UpdateDepartamentojudicialDto extends PartialType(CreateDepartamentojudicialDto) {}
