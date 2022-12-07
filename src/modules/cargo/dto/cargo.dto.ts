import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';
import { DepartamentoJudicial } from '../../../modules/departamentojudicial/entities';
import { EstadoCargo } from '../../..//modules/estadocargo/entities';
import { Fuero } from '../../..//modules/fuero/entities';
import { OrganismoJurisdiccional } from '../../../modules/organismojurisdiccional/entities';
import { TipoCargo } from '../../../modules/tipocargo/entities';

@Exclude()
export class CargoDto {
  @Expose()
  @ApiProperty()
  public readonly id: number;

  @Expose()
  @ApiProperty({ description: 'Fecha de Creación del Cargo', type: () => Date })
  public readonly createdAt: Date;

  @Expose()
  @ApiProperty()
  public readonly funciona: boolean;

  @Expose()
  @ApiProperty()
  public readonly numero: number;

  @Expose()
  @ApiProperty({
    description: 'Descripción del la sede',
    maxLength: 255,
    type: () => String,
  })
  public readonly sede: string;

  @Expose()
  @Type(() => EstadoCargo)
  @ApiProperty({
    description: 'Estado del Cargo',
    type: () => EstadoCargo,
  })
  public readonly estadoCargo: EstadoCargo;

  @Expose()
  @ApiProperty({
    description: 'Tipo del Cargo',
    type: () => TipoCargo,
  })
  public readonly tipoCargo: TipoCargo;

  @Expose()
  @ApiProperty({
    description: 'Fuero del Cargo',
    type: () => Fuero,
  })
  public readonly fuero: Fuero;

  @Expose()
  @ApiProperty({
    description: 'Departamento Judicial del Cargo',
    type: () => DepartamentoJudicial,
  })
  public readonly departamentoJudicial: DepartamentoJudicial;

  @Expose()
  @ApiProperty({
    description: 'Organismo Jurisdiccional del Cargo',
    type: () => OrganismoJurisdiccional,
  })
  public readonly organismoJurisdiccional: OrganismoJurisdiccional;
}
