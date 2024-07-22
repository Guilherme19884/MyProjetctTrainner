import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class AddTableEvaluation1721664332237 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Criação da tabela Evaluation
        await queryRunner.createTable(
            new Table({
                name: "evaluation",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "date",
                        type: "date",
                        isNullable: false
                    },
                    {
                        name: "location_of_test",
                        type: "varchar",
                        length: "100",
                        isNullable: false
                    },
                    {
                        name: "modalidade",
                        type: "enum",
                        enum: ["Corrida", "Ciclismo", "Duathlon"],
                        isNullable: false
                    },
                    {
                        name: "user_id",
                        type: "int",
                        isNullable: false
                    }
                ]
            })
        );

        // Adição da chave estrangeira para User na tabela Evaluation
        await queryRunner.createForeignKey(
            "evaluation",
            new TableForeignKey({
                columnNames: ["user_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
                onDelete: "CASCADE"
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Remover as chaves estrangeiras
        const evaluationTable = await queryRunner.getTable("evaluation");
        if (evaluationTable) {
            const userForeignKey = evaluationTable.foreignKeys.find(fk => fk.columnNames.indexOf("user_id") !== -1);
            if (userForeignKey) {
                await queryRunner.dropForeignKey("evaluation", userForeignKey);
            }

            // Remover a tabela
            await queryRunner.dropTable("evaluation");
        }
    }
}
