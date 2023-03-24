import {MigrationInterface, QueryRunner} from "typeorm";

export class addLastTouchToCounter1679665334054 implements MigrationInterface {
    name = 'addLastTouchToCounter1679665334054'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "counter" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "name" varchar NOT NULL,
                "description" varchar NOT NULL DEFAULT (''),
                "count" integer NOT NULL DEFAULT (0),
                "paused" boolean NOT NULL DEFAULT (0),
                "lastTouch" datetime NOT NULL DEFAULT (datetime('now'))
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "counter"
        `);
    }

}
