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
import { DepartamentoJudicial } from '../../../modules/departamentojudicial/entities';
import { EstadoCargo } from '../../../modules/estadocargo/entities';
import { CreateFueroDto } from '../../../modules/fuero/dto';
import { Fuero } from '../../../modules/fuero/entities';
import { OrganismoJurisdiccional } from '../../../modules/organismojurisdiccional/entities';
import { TipoCargo } from '../../../modules/tipocargo/entities';
export class CreateCargoDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'la propiedad numero debe existir' })
  @IsNumber(
    { allowNaN: false, maxDecimalPlaces: 0 },
    { message: 'Debe ser un número sin decimales' },
  )
  numero: number;

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

  @Type(() => EstadoCargo)
  @Allow()
  @ApiProperty({
    description: 'Estado del Cargo',
    type: () => EstadoCargo,
  })
  estadoCargo: EstadoCargo;

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
