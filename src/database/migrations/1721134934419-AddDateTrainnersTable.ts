import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddDateToTrainners1621066270881 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('trainners', new TableColumn({
            name: 'date',
            type: 'date',
            isNullable: false
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('trainners', 'date');
    }
}
