import { Test, TestingModule } from '@nestjs/testing';
import { ParkVehiclesController } from './park-vehicles.controller';
import { ParkVehiclesService } from './park-vehicles.service';

describe('ParkVehiclesController', () => {
  let controller: ParkVehiclesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParkVehiclesController],
      providers: [ParkVehiclesService],
    }).compile();

    controller = module.get<ParkVehiclesController>(ParkVehiclesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
