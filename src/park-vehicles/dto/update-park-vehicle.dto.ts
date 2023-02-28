import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty, IsDate } from 'class-validator';
import { CreateParkVehicleDto } from './create-park-vehicle.dto';

export class UpdateParkVehicleDto extends PartialType(CreateParkVehicleDto) {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The vehicle id',
    default: '',
  })
  public park_id: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The park id',
    default: '',
  })
  public vehicle_id: number;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The inbound',
    default: '',
  })
  public inbound: Date;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The outbound',
    default: '',
  })
  public outbound: Date;
}
