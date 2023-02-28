import { Park } from '../../parks/entities/park.entity';
import { Vehicle } from '../../vehicles/entities/vehicle.entity';
import {
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  Entity,
} from 'typeorm';

@Entity()
export class ParkVehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Park)
  @JoinColumn({
    name: 'park_id',
    referencedColumnName: 'id',
  })
  park: Park;

  @OneToOne(() => Vehicle)
  @JoinColumn({
    name: 'vehicle_id',
    referencedColumnName: 'id',
  })
  vehicle: Vehicle;

  @Column({
    type: 'datetime',
    nullable: true,
  })
  outbound: Date;

  @Column({
    type: 'datetime',
    nullable: true,
  })
  inbound: Date;

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
