import { OrganismoJurisdiccional } from '../../modules/organismojurisdiccional/entities';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { organismoJurisdiccionalSeed } from '../seed/OrganismoJurisdiccionalSeed';

export class OrgJurisdiccionalSeed1669829023700 implements MigrationInterface {
  name = '1669829023700';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection
      .createQueryBuilder()
      .insert()
      .into(OrganismoJurisdiccional)
      .values(organismoJurisdiccionalSeed)
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
