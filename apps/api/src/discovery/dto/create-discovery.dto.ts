import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsArray, IsEnum, IsOptional } from 'class-validator';
import { DiscoveryStatusOption } from '../enums/discovery-status.enum';
import { DiscoverySeverity } from '../enums/discovery-severity.enum';

export class CreateDiscoveryDto {
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

  @ApiProperty({
    enum: DiscoveryStatusOption,
    default: DiscoveryStatusOption.Active,
  })
  @IsEnum(DiscoveryStatusOption)
  @IsOptional()
  status?: DiscoveryStatusOption;
}
