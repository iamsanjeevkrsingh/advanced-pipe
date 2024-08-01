import { MigrationInterface, QueryRunner } from 'typeorm';

export class User1722523599978 implements MigrationInterface {
  name = 'User1722523599978';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "created_by" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "updated_by" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updated_by"`);
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "created_by"`);
  }
}
