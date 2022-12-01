import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DepartamentoJudicial {
  @ApiProperty()
  @PrimaryGeneratedColumn('identity')
  id: number;

  @ApiProperty()
  @Column({ length: 255 })
  descripcion: string;
}
