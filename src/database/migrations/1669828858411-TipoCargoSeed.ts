import { TipoCargo } from '../../modules/tipocargo/entities';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { tipoCargoSeed } from '../seed/TipoCargo';

export class TipoCargoSeed1669828858411 implements MigrationInterface {
  name='1669828858411';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection
      .createQueryBuilder()
      .insert()
      .into(TipoCargo)
      .values(tipoCargoSeed)
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
