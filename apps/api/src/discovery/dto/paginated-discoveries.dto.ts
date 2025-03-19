import { ApiProperty } from '@nestjs/swagger';
import { Discovery } from '../entities/discovery.entity';

export class PaginatedDiscoveriesDto {
  @ApiProperty({ type: [Discovery] })
  data: Discovery[];

  @ApiProperty()
  total: number;

  @ApiProperty()
  page: number;

  @ApiProperty()
  limit?: number;
}
