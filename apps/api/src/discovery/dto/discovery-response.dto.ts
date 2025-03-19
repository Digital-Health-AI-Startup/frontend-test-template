import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsArray, IsEnum } from 'class-validator';
import { DiscoveryStatusOption } from '../enums/discovery-status.enum';
import { DiscoverySeverity } from '../enums/discovery-severity.enum';

export class DiscoveryResponseDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  body: string;

  @ApiProperty({ type: [String] })
  @IsArray()
  @IsString({ each: true })
  categories: string[];

  @ApiProperty({ enum: DiscoverySeverity })
  @IsEnum(DiscoverySeverity)
  severity: DiscoverySeverity;

  @ApiProperty()
  @IsString()
  createdAt: string;

  @ApiProperty({ enum: DiscoveryStatusOption })
  @IsEnum(DiscoveryStatusOption)
  status: DiscoveryStatusOption;
}
