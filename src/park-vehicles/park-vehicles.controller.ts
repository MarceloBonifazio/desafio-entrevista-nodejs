import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ParkVehiclesService } from './park-vehicles.service';
import { CreateParkVehicleDto } from './dto/create-park-vehicle.dto';
import { UpdateParkVehicleDto } from './dto/update-park-vehicle.dto';

@Controller('park-vehicles')
export class ParkVehiclesController {
  constructor(private readonly parkVehiclesService: ParkVehiclesService) {}

  @Post()
  create(@Body() createParkVehicleDto: CreateParkVehicleDto) {
    return this.parkVehiclesService.create(createParkVehicleDto);
  }

  @Get()
  findAll() {
    return this.parkVehiclesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parkVehiclesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateParkVehicleDto: UpdateParkVehicleDto,
  ) {
    return this.parkVehiclesService.update(+id, updateParkVehicleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parkVehiclesService.remove(+id);
  }
}
