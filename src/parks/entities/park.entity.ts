import { Vehicle } from '../../vehicles/entities/vehicle.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';

@Entity()
export class Park {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Vehicle)
  @JoinTable()
  vehicles: Vehicle[];

  @Column({ length: 300 })
  name: string;

  @Column()
  document: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column('int')
  car_qty: number;

  @Column('int')
  moto_qty: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;
}
