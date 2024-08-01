import { MigrationInterface, QueryRunner } from 'typeorm';

export class User1722523514162 implements MigrationInterface {
  name = 'User1722523514162';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "email" character varying NOT NULL, "mobile_number" character varying NOT NULL, "age" integer NOT NULL, "is_registered" boolean NOT NULL DEFAULT false, "config" jsonb NOT NULL, "user_details" jsonb NOT NULL, "role_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "version" integer NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_350c2c34c6fdd4b292ab6e77879" UNIQUE ("mobile_number"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
