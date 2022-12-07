import { Fuero } from '../../modules/fuero/entities/fuero.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { fueroSeed } from '../seed/FueroSeed';

export class FueroSeed1669828626775 implements MigrationInterface {
  name = '1669828626775';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection
      .createQueryBuilder()
      .insert()
      .into(Fuero)
      .values(fueroSeed)
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
