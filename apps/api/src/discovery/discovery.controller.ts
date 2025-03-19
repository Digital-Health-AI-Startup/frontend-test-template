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
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';
import { DiscoveryService } from './discovery.service';
import { Discovery } from './entities/discovery.entity';
import { CreateDiscoveryDto } from './dto/create-discovery.dto';
import { UpdateDiscoveryDto } from './dto/update-discovery.dto';
import { PaginatedDiscoveriesDto } from './dto/paginated-discoveries.dto';

@ApiTags('discoveries')
@Controller('discoveries')
export class DiscoveryController {
  constructor(private readonly discoveryService: DiscoveryService) {}

  @Get()
  @ApiOperation({ summary: 'Get all discoveries' })
  @ApiResponse({ status: 200, description: 'Return all discoveries.' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  findAll(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ): PaginatedDiscoveriesDto {
    return this.discoveryService.findPaginated(page, limit);
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
