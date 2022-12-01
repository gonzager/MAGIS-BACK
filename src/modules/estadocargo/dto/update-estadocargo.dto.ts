import { PartialType } from '@nestjs/mapped-types';
import { CreateEstadocargoDto } from './create-estadocargo.dto';

export class UpdateEstadocargoDto extends PartialType(CreateEstadocargoDto) {}
