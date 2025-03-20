import { Injectable, NotFoundException } from '@nestjs/common';
import { Discovery } from './entities/discovery.entity';
import { CreateDiscoveryDto } from './dto/create-discovery.dto';
import { UpdateDiscoveryDto } from './dto/update-discovery.dto';
import { PaginatedDiscoveriesDto } from './dto/paginated-discoveries.dto';
import { DiscoveryStatusOption } from './enums/discovery-status.enum';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class DiscoveryService {
  private discoveries: Discovery[] = [];

  constructor() {
    this.loadDiscoveries();
  }

  private loadDiscoveries() {
    const filePath = path.join(__dirname, '../data/discoveries.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(fileContent);
    this.discoveries = data.discoveries;
  }

  findAllPaginated(
    page: number = 1,
    limit: number = 10,
    status?: DiscoveryStatusOption,
  ): PaginatedDiscoveriesDto {
    let filteredDiscoveries = [...this.discoveries];

    if (status) {
      filteredDiscoveries = filteredDiscoveries.filter(
        (discovery) => discovery.status === status,
      );
    }

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedDiscoveries = filteredDiscoveries.slice(
      startIndex,
      endIndex,
    );

    return {
      data: paginatedDiscoveries,
      total: filteredDiscoveries.length,
      page,
      limit,
    };
  }

  findOne(id: string): Discovery {
    const discovery = this.discoveries.find((d) => d.id === id);
    if (!discovery) {
      throw new NotFoundException(`Discovery with ID ${id} not found`);
    }
    return discovery;
  }

  create(createDiscoveryDto: CreateDiscoveryDto): Discovery {
    const newDiscovery: Discovery = {
      ...createDiscoveryDto,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      status: createDiscoveryDto.status || DiscoveryStatusOption.Active,
    };
    this.discoveries.push(newDiscovery);
    return newDiscovery;
  }

  update(id: string, updateDiscoveryDto: UpdateDiscoveryDto): Discovery {
    const index = this.discoveries.findIndex((d) => d.id === id);
    if (index === -1) {
      throw new NotFoundException(`Discovery with ID ${id} not found`);
    }
    this.discoveries[index] = {
      ...this.discoveries[index],
      ...updateDiscoveryDto,
    };
    return this.discoveries[index];
  }

  remove(id: string): void {
    const index = this.discoveries.findIndex((d) => d.id === id);
    if (index === -1) {
      throw new NotFoundException(`Discovery with ID ${id} not found`);
    }
    this.discoveries.splice(index, 1);
  }
}
