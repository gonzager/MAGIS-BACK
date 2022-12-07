import { ApiProperty, getSchemaPath } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  IsDate,
  MaxLength,
} from 'class-validator';
import { DepartamentoJudicial } from '../../../modules/departamentojudicial/entities';
import { Fuero } from '../../../modules/fuero/entities';
import { OrganismoJurisdiccional } from '../../../modules/organismojurisdiccional/entities';
import { TipoCargo } from '../../../modules/tipocargo/entities';

export class CreateCargoDto {
  @IsNotEmpty({ message: 'La propiedad numero debe existir' })
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

  @IsNotEmpty({ message: 'la propiedad sede debe existir' })
  @IsString({ message: 'La propiedad dese dede ser string' })
  @MaxLength(255)
  @ApiProperty({
    description: 'Descripción del la sede',
    maxLength: 255,
  })
  sede: string;
  
  @IsNotEmpty({ message: "La propiedad fecha alta debe existir"})
  @IsDate()
  @ApiProperty({
    description: 'Fecha del alta de...',
  })
  fechaAlta: Date

  @IsNotEmpty({ message: 'El nombre del archivo debe existir' })
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
