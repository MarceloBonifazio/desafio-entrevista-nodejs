import { Test, TestingModule } from '@nestjs/testing';
import { ParkVehiclesService } from './park-vehicles.service';

describe('ParkVehiclesService', () => {
  let service: ParkVehiclesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParkVehiclesService],
    }).compile();

    service = module.get<ParkVehiclesService>(ParkVehiclesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
