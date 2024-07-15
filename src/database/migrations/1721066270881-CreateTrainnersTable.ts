import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTrainnersTable1721066270881 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'trainners',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'location',
                    type: 'varchar',
                    length: '100',
                    isNullable: false
                },
                {
                    name: 'km',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'timeOfTrainner',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'intensity',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'user_id',
                    type: 'int',
                    isNullable: false
                }
            ],
            foreignKeys: [
                {
                    columnNames: ['user_id'],
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('trainners');
    }

}
