import { EstadoCargo } from '../../modules/estadocargo/entities';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { estadoCargoSeed } from '../seed/EstadoCargoSeed';

export class EstadoCargoSeed1669829193497 implements MigrationInterface {
  name = '1669829193497';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection
      .createQueryBuilder()
      .insert()
      .into(EstadoCargo)
      .values(estadoCargoSeed)
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
