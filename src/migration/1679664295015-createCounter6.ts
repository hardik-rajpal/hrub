import {MigrationInterface, QueryRunner} from "typeorm";

export class createCounter61679664295015 implements MigrationInterface {
    name = 'createCounter61679664295015'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "temporary_counter" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "name" varchar NOT NULL,
                "description6" varchar NOT NULL DEFAULT (''),
                "count" integer NOT NULL DEFAULT (0),
                "paused" boolean NOT NULL DEFAULT (0)
            )
        `);
        await queryRunner.query(`
            INSERT INTO "temporary_counter"("id", "name", "description6", "count", "paused")
            SELECT "id",
                "name",
                "description",
                "count",
                "paused"
            FROM "counter"
        `);
        await queryRunner.query(`
            DROP TABLE "counter"
        `);
        await queryRunner.query(`
            ALTER TABLE "temporary_counter"
                RENAME TO "counter"
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "counter"
                RENAME TO "temporary_counter"
        `);
        await queryRunner.query(`
            CREATE TABLE "counter" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "name" varchar NOT NULL,
                "description" varchar NOT NULL DEFAULT (''),
                "count" integer NOT NULL DEFAULT (0),
                "paused" boolean NOT NULL DEFAULT (0)
            )
        `);
        await queryRunner.query(`
            INSERT INTO "counter"("id", "name", "description", "count", "paused")
            SELECT "id",
                "name",
                "description6",
                "count",
                "paused"
            FROM "temporary_counter"
        `);
        await queryRunner.query(`
            DROP TABLE "temporary_counter"
        `);
    }

}
