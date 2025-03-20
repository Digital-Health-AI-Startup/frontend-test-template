import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { DiscoveryStatusOption } from '../enums/discovery-status.enum';

export class DiscoveryQueryDto {
  @ApiPropertyOptional({
    description: 'Page number',
    type: Number,
    default: 1,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page?: number;

  @ApiPropertyOptional({
    description: 'Number of items per page',
    type: Number,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  limit?: number;

  @ApiPropertyOptional({
    description: 'Filter discoveries by status',
    enum: DiscoveryStatusOption,
  })
  @IsOptional()
  @IsEnum(DiscoveryStatusOption)
  status?: DiscoveryStatusOption;
}
