import { MigrationInterface, QueryRunner } from "typeorm";

export class numeroToVarchar1670279904580 implements MigrationInterface {
    name = 'numeroToVarchar1670279904580'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cargo" DROP COLUMN "numero"`);
        await queryRunner.query(`ALTER TABLE "cargo" ADD "numero" character varying(255)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cargo" DROP COLUMN "numero"`);
        await queryRunner.query(`ALTER TABLE "cargo" ADD "numero" numeric(15,0)`);
    }

}
