import { MigrationInterface, QueryRunner } from "typeorm";

export class init1669946532133 implements MigrationInterface {
    name = 'init1669946532133'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cargo" DROP CONSTRAINT "FK_ede418b18228adac7bb83d474c4"`);
        await queryRunner.query(`ALTER TABLE "cargo" ALTER COLUMN "estadoCargoId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cargo" ADD CONSTRAINT "FK_ede418b18228adac7bb83d474c4" FOREIGN KEY ("estadoCargoId") REFERENCES "estado_cargo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cargo" DROP CONSTRAINT "FK_ede418b18228adac7bb83d474c4"`);
        await queryRunner.query(`ALTER TABLE "cargo" ALTER COLUMN "estadoCargoId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cargo" ADD CONSTRAINT "FK_ede418b18228adac7bb83d474c4" FOREIGN KEY ("estadoCargoId") REFERENCES "estado_cargo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
