import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class CreateParkVehicleDto {
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

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The inbound',
    default: '',
  })
  public inbound: Date;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The outbound',
    default: '',
  })
  public outbound: Date;
}
