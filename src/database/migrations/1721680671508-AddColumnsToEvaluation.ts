import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnsToEvaluation1621664332237 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('evaluation', new TableColumn({
            name: 'distanceOfTestInMeters',
            type: 'int',
            isNullable: false
        }));

        await queryRunner.addColumn('evaluation', new TableColumn({
            name: 'vo2max',
            type: 'int',
            isNullable: true
        }));

        await queryRunner.addColumn('evaluation', new TableColumn({
            name: 'runningRhythm',
            type: 'int',
            isNullable: true
        }));

        await queryRunner.addColumn('evaluation', new TableColumn({
            name: 'distanceOfTestInKm',
            type: 'int',
            isNullable: true,
            default: 5
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('evaluation', 'distanceOfTestInMeters');
        await queryRunner.dropColumn('evaluation', 'vo2max');
        await queryRunner.dropColumn('evaluation', 'runningRhythm');
        await queryRunner.dropColumn('evaluation', 'distanceOfTestInKm');
    }
}
