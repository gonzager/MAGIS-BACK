import { ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  Allow,
  IsBoolean,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';
import { DepartamentoJudicial } from 'src/modules/departamentojudicial/entities';
import { EstadoCargo } from 'src/modules/estadocargo/entities';
import { CreateFueroDto } from 'src/modules/fuero/dto';
import { Fuero } from 'src/modules/fuero/entities';
import { OrganismoJurisdiccional } from 'src/modules/organismojurisdiccional/entities';
import { TipoCargo } from 'src/modules/tipocargo/entities';
export class CreateCargoDto {
  @IsString({ message: 'La propiedad numero dede ser string' })
  @MaxLength(255)
  @ApiProperty({
    maxLength: 255
  })
  numero: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'la propiedad funciona debe existir' })
  @IsBoolean({ message: 'la propidedad funciona debe ser boolena' })
  public funciona: boolean;

  @IsString({ message: 'La propiedad dese dede ser string' })
  @MaxLength(255)
  @ApiProperty({
    description: 'Descripción del la sede',
    maxLength: 255,
  })
  sede: string;
  
  @IsString({ message: 'El nombre del archivo debe ser string' })
  @MaxLength(1024)
  @ApiProperty({
    maxLength: 1024
  })
  nombreArchivo: string;

  @IsNotEmptyObject()
  @ApiProperty({
    description: 'Tipo del Cargo',
    type: () => TipoCargo,
  })
  tipoCargo: TipoCargo;

  @IsNotEmptyObject()
  @ApiProperty({
    description: 'Fuero del Cargo',
    oneOf: [{ $ref: getSchemaPath(Fuero) }],
  })
  public fuero: Fuero;

  @IsNotEmptyObject()
  @ApiProperty({
    description: 'Departamento Judicial del Cargo',
  })
  departamentoJudicial: DepartamentoJudicial;

  @IsNotEmptyObject()
  @ApiProperty({
    description: 'Organismo Jurisdiccional del Cargo',
  })
  organismoJurisdiccional: OrganismoJurisdiccional;
}
