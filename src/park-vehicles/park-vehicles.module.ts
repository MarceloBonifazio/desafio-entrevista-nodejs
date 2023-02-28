import { Module } from '@nestjs/common';
import { ParkVehiclesService } from './park-vehicles.service';
import { ParkVehiclesController } from './park-vehicles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkVehicle } from './entities/park-vehicle.entity';

@Module({
  controllers: [ParkVehiclesController],
  providers: [ParkVehiclesService],
  imports: [TypeOrmModule.forFeature([ParkVehicle])],
})
export class ParkVehiclesModule {}
