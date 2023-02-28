import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateParkVehicleDto } from './dto/create-park-vehicle.dto';
import { UpdateParkVehicleDto } from './dto/update-park-vehicle.dto';
import { ParkVehicle } from './entities/park-vehicle.entity';

@Injectable()
export class ParkVehiclesService {
  constructor(
    @InjectRepository(ParkVehicle)
    private parkVehiclesRepository: Repository<ParkVehicle>,
  ) {}

  create(createParkVehicleDto: CreateParkVehicleDto) {
    return this.parkVehiclesRepository.save(createParkVehicleDto);
  }

  findAll() {
    return this.parkVehiclesRepository.find({
      loadRelationIds: true,
      relations: ['park', 'vehicle'],
    });
  }

  findOne(id: number) {
    return this.parkVehiclesRepository.findOneBy({ id: id });
  }

  update(id: number, updateParkVehicleDto: UpdateParkVehicleDto) {
    return this.parkVehiclesRepository.update(id, updateParkVehicleDto);
  }

  remove(id: number) {
    return this.parkVehiclesRepository.delete(id);
  }
}
