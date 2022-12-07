import { MigrationInterface, QueryRunner } from "typeorm";

export class nombreArchivo1670280429235 implements MigrationInterface {
    name = 'nombreArchivo1670280429235'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cargo" DROP COLUMN "updatedAd"`);
        await queryRunner.query(`ALTER TABLE "cargo" ADD "updatedAd" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "cargo" ADD "nombreArchivo" character varying(1024)`);
        await queryRunner.query(`ALTER TABLE "cargo" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "cargo" DROP COLUMN "numero"`);
        await queryRunner.query(`ALTER TABLE "cargo" ADD "numero" numeric(15)`);
        await queryRunner.query(`ALTER TABLE "cargo" DROP COLUMN "numero"`);
        await queryRunner.query(`ALTER TABLE "cargo" ADD "numero" character varying(255)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cargo" DROP COLUMN "numero"`);
        await queryRunner.query(`ALTER TABLE "cargo" ADD "numero" numeric(15)`);
        await queryRunner.query(`ALTER TABLE "cargo" DROP COLUMN "numero"`);
        await queryRunner.query(`ALTER TABLE "cargo" ADD "numero" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "cargo" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "cargo" DROP COLUMN "nombreArchivo"`);
        await queryRunner.query(`ALTER TABLE "cargo" DROP COLUMN "updatedAd"`);
        await queryRunner.query(`ALTER TABLE "cargo" ADD "updatedAd" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

}
