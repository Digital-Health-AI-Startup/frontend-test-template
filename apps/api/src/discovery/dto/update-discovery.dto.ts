import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsArray, IsEnum, IsOptional } from 'class-validator';
import { DiscoveryStatusOption } from '../enums/discovery-status.enum';
import { DiscoverySeverity } from '../enums/discovery-severity.enum';

export class UpdateDiscoveryDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  type?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  body?: string;

  @ApiProperty({ type: [String] })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  categories?: string[];

  @ApiProperty({ enum: DiscoverySeverity })
  @IsEnum(DiscoverySeverity)
  @IsOptional()
  severity?: DiscoverySeverity;

  @ApiProperty({ enum: DiscoveryStatusOption })
  @IsEnum(DiscoveryStatusOption)
  @IsOptional()
  status?: DiscoveryStatusOption;
}
