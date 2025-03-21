import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum, IsNotEmpty } from 'class-validator';
import { DiscoveryStatusOption } from '../enums/discovery-status.enum';
import { DiscoverySeverity } from '../enums/discovery-severity.enum';
import { DiscoveryType } from '../enums/discovery-type.enum';

export class CreateDiscoveryDto {
  @ApiProperty({ enum: DiscoveryType })
  @IsEnum(DiscoveryType)
  type: DiscoveryType;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  body: string;

  @ApiProperty({ enum: DiscoverySeverity })
  @IsEnum(DiscoverySeverity)
  severity: DiscoverySeverity;

  @ApiProperty({
    enum: DiscoveryStatusOption,
    default: DiscoveryStatusOption.Active,
  })
  @IsEnum(DiscoveryStatusOption)
  status: DiscoveryStatusOption;
}
