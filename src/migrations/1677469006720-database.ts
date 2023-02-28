import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableIndex,
} from 'typeorm';

export class database1677469006720 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'vehicle',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'brand',
            type: 'varchar',
          },
          {
            name: 'model',
            type: 'varchar',
          },
          {
            name: 'color',
            type: 'varchar',
          },
          {
            name: 'plate',
            type: 'varchar',
          },
          {
            name: 'type',
            type: 'enum',
            enum: ['car', 'moto'],
          },
          {
            default: 'CURRENT_TIMESTAMP',
            name: 'updated_at',
            onUpdate: 'CURRENT_TIMESTAMP',
            type: 'timestamp',
          },
          {
            default: 'CURRENT_TIMESTAMP',
            name: 'created_at',
            type: 'timestamp',
          },
        ],
      }),
      true,
    );

    await queryRunner.createTable(
      new Table({
        name: 'park',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'document',
            type: 'varchar',
          },
          {
            name: 'address',
            type: 'varchar',
          },
          {
            name: 'phone',
            type: 'varchar',
          },
          {
            name: 'car_qty',
            type: 'int',
          },
          {
            name: 'moto_qty',
            type: 'int',
          },
          {
            default: 'CURRENT_TIMESTAMP',
            name: 'updated_at',
            onUpdate: 'CURRENT_TIMESTAMP',
            type: 'timestamp',
          },
          {
            default: 'CURRENT_TIMESTAMP',
            name: 'created_at',
            type: 'timestamp',
          },
        ],
      }),
      true,
    );

    await queryRunner.createTable(
      new Table({
        name: 'park_vehicles',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'park_id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'vehicle_id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'inbound',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'outbound',
            type: 'timestamp',
            isNullable: true,
          },
          {
            default: 'CURRENT_TIMESTAMP',
            name: 'updated_at',
            onUpdate: 'CURRENT_TIMESTAMP',
            type: 'timestamp',
          },
          {
            default: 'CURRENT_TIMESTAMP',
            name: 'created_at',
            type: 'timestamp',
          },
        ],
      }),
      true,
    );

    await queryRunner.createIndex(
      'park',
      new TableIndex({
        name: 'IDX_PARK_ID',
        columnNames: ['id'],
      }),
    );

    await queryRunner.createIndex(
      'vehicle',
      new TableIndex({
        name: 'IDX_VEHICLE_ID',
        columnNames: ['id'],
      }),
    );

    await queryRunner.createIndex(
      'park_vehicles',
      new TableIndex({
        name: 'IDX_PARK_VEHICLES_ID',
        columnNames: ['id'],
      }),
    );

    await queryRunner.createForeignKey(
      'park_vehicles',
      new TableForeignKey({
        name: 'IDX_PARK_VEHICLES_PARK_ID',
        columnNames: ['park_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'park',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'park_vehicles',
      new TableForeignKey({
        name: 'IDX_PARK_VEHICLES_VEHICLE_ID',
        columnNames: ['vehicle_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'vehicle',
        onDelete: 'CASCADE',
      }),
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex('park', 'IDX_PARK_ID');
    await queryRunner.dropIndex('vehicle', 'IDX_VEHICLE_ID');
    await queryRunner.dropIndex('park_vehicles', 'IDX_PARK_VEHICLES_ID');
    await queryRunner.dropForeignKey(
      'park_vehicles',
      'IDX_PARK_VEHICLES_PARK_ID',
    );
    await queryRunner.dropForeignKey(
      'park_vehicles',
      'IDX_PARK_VEHICLES_VEHICLE_ID',
    );
    await queryRunner.dropTable('park');
    await queryRunner.dropTable('vehicle');
    await queryRunner.dropTable('park_vehicles');
  }
}
