import { DepartamentoJudicial } from '../../modules/departamentojudicial/entities';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { departamentoJudicialSeed } from '../seed/DepartamentoJudicialSeed';

export class DptoJudicialSeed1669830951970 implements MigrationInterface {
  name = '1669830951970';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection
      .createQueryBuilder()
      .insert()
      .into(DepartamentoJudicial)
      .values(departamentoJudicialSeed)
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
