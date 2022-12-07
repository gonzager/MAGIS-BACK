import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  //OneToMany,
} from 'typeorm';
import { EstadoCargo } from '../../../modules/estadocargo/entities/estadocargo.entity';
import { DepartamentoJudicial } from '../../../modules/departamentojudicial/entities/departamentojudicial.entity';
import { Fuero } from '../../../modules/fuero/entities/fuero.entity';
import { OrganismoJurisdiccional } from '../../../modules/organismojurisdiccional/entities/organismojurisdiccional.entity';
import { TipoCargo } from '../../..//modules/tipocargo/entities/tipocargo.entity';

@Entity()
export class Cargo {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @ManyToOne(() => TipoCargo, (tipoCargo) => tipoCargo.id, {
    nullable: false,
    createForeignKeyConstraints: true,
  })
  tipoCargo: TipoCargo;

  @ManyToOne(() => Fuero, (fuero) => fuero.id, {
    nullable: false,
    createForeignKeyConstraints: true,
  })
  fuero: Fuero;

  @ManyToOne(
    () => DepartamentoJudicial,
    (departamentJudicial) => departamentJudicial.id,
    { nullable: false, createForeignKeyConstraints: true },
  )
  departamentoJudicial: DepartamentoJudicial;

  @ManyToOne(
    () => OrganismoJurisdiccional,
    (organismoJurisdiccional) => organismoJurisdiccional.id,
    { nullable: false, createForeignKeyConstraints: true },
  )
  organismoJurisdiccional: OrganismoJurisdiccional;

  @ManyToOne(() => EstadoCargo, (estadoCargo) => estadoCargo.id, {
    nullable: true,
    createForeignKeyConstraints: true,
  })
  estadoCargo: EstadoCargo;

  // @OneToMany(
  //   () => CambioEstadoCargo,
  //   (cambioEstadoCargo) => cambioEstadoCargo.cargo,
  // )
  // cambiosEstadoCargo: Promise<CambioEstadoCargo[]>;

  @Column({ nullable: false, default: true })
  funciona: boolean;

  @Column({ length: 255, nullable: true })
  numero: string;

  @Column({ type: 'timestamptz', nullable: true })
  fechaAlta: Date;

  @Column({ length: 255, nullable: true })
  sede: string;

  @Column({ length: 1024, nullable: true })
  nombreArchivo: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;
}
