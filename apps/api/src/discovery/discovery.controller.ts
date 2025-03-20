import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiParam } from '@nestjs/swagger';
import { DiscoveryService } from './discovery.service';
import { Discovery } from './entities/discovery.entity';
import { CreateDiscoveryDto } from './dto/create-discovery.dto';
import { UpdateDiscoveryDto } from './dto/update-discovery.dto';
import { PaginatedDiscoveriesDto } from './dto/paginated-discoveries.dto';
import { DiscoveryStatusOption } from './enums/discovery-status.enum';

@ApiTags('discoveries')
@Controller('discoveries')
export class DiscoveryController {
  constructor(private readonly discoveryService: DiscoveryService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all discoveries with pagination and optional status filter',
  })
  @ApiResponse({
    status: 200,
    description:
      'Returns paginated discoveries and optionally filtered by status',
    type: PaginatedDiscoveriesDto,
  })
  findAll(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('status') status?: DiscoveryStatusOption,
  ): PaginatedDiscoveriesDto {
    return this.discoveryService.findAllPaginated(page, limit, status);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a discovery by id' })
  @ApiResponse({ status: 200, description: 'Return the discovery.' })
  @ApiResponse({ status: 404, description: 'Discovery not found.' })
  @ApiParam({ name: 'id', description: 'Discovery ID' })
  findOne(@Param('id') id: string): Discovery {
    return this.discoveryService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new discovery' })
  @ApiResponse({
    status: 201,
    description: 'The discovery has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  create(@Body() createDiscoveryDto: CreateDiscoveryDto): Discovery {
    return this.discoveryService.create(createDiscoveryDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a discovery' })
  @ApiResponse({
    status: 200,
    description: 'The discovery has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Discovery not found.' })
  @ApiParam({ name: 'id', description: 'Discovery ID' })
  update(
    @Param('id') id: string,
    @Body() updateDiscoveryDto: UpdateDiscoveryDto,
  ): Discovery {
    return this.discoveryService.update(id, updateDiscoveryDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a discovery' })
  @ApiResponse({
    status: 200,
    description: 'The discovery has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Discovery not found.' })
  @ApiParam({ name: 'id', description: 'Discovery ID' })
  remove(@Param('id') id: string): void {
    this.discoveryService.remove(id);
  }
}
