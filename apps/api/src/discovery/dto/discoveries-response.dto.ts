import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { DiscoveryResponseDto } from './discovery-response.dto';

export class DiscoveriesResponseDto {
  @ApiProperty({ type: [DiscoveryResponseDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DiscoveryResponseDto)
  discoveries: DiscoveryResponseDto[];
}
