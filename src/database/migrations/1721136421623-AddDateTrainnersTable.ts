import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddDateColumnToTrainnersTable1720275915717 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('trainners', new TableColumn({
            name: 'date',
            type: 'date',
            isNullable: false,
            default: '(CURRENT_TIMESTAMP)'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('trainners', 'date');
    }
}
