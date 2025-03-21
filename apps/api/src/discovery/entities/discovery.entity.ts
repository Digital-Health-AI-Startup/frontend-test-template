import { ApiProperty } from '@nestjs/swagger';
import { DiscoveryStatusOption } from '../enums/discovery-status.enum';
import { DiscoverySeverity } from '../enums/discovery-severity.enum';
import { DiscoveryType } from '../enums/discovery-type.enum';

export class Discovery {
  @ApiProperty({
    description: 'Unique identifier for the discovery',
    example: '550e8400-e29b-41d4-a716-446655440001',
  })
  id: string;

  @ApiProperty({
    description: 'Type of discovery',
    enum: DiscoveryType,
    example: DiscoveryType.Physiology,
  })
  type: DiscoveryType;

  @ApiProperty({
    description: 'Title of the discovery',
    example: 'Heart Rate Variability',
  })
  title: string;

  @ApiProperty({
    description: 'Detailed description of the discovery',
    example: 'Consistent decrease in heart rate variability over the past week',
  })
  body: string;

  @ApiProperty({
    description: 'Severity level of the discovery',
    enum: DiscoverySeverity,
    example: DiscoverySeverity.Medium,
  })
  severity: DiscoverySeverity;

  @ApiProperty({
    description: 'Timestamp when the discovery was created',
    example: '2024-02-20T14:30:00Z',
  })
  createdAt: string;

  @ApiProperty({
    description: 'Current status of the discovery',
    enum: DiscoveryStatusOption,
    example: DiscoveryStatusOption.Active,
  })
  status: DiscoveryStatusOption;
}
