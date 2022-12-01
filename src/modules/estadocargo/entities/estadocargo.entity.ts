import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
@Entity()
export class EstadoCargo {
  @ApiProperty()
  @PrimaryGeneratedColumn('identity')
  id: number;

  @ApiProperty()
  @Column({ length: 255 })
  descripcion: string;

  @ApiProperty()
  @Column()
  esVacancia: boolean;

  @ApiProperty()
  @Column({ default: false })
  esInicial: boolean;
}
