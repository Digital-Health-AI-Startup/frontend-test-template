import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { DiscoveryStatusOption } from '../enums/discovery-status.enum';
import { DiscoverySeverity } from '../enums/discovery-severity.enum';
import { DiscoveryType } from '../enums/discovery-type.enum';

export class UpdateDiscoveryDto {
  @ApiProperty({ enum: DiscoveryType, required: false })
  @IsOptional()
  @IsEnum(DiscoveryType)
  type?: DiscoveryType;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  body?: string;

  @ApiProperty({ enum: DiscoverySeverity, required: false })
  @IsOptional()
  @IsEnum(DiscoverySeverity)
  severity?: DiscoverySeverity;

  @ApiProperty({ enum: DiscoveryStatusOption, required: false })
  @IsOptional()
  @IsEnum(DiscoveryStatusOption)
  status?: DiscoveryStatusOption;
}
