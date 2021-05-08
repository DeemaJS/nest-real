import {Get, Controller } from '@nestjs/common';

import { DeviceEntity } from './obgdata.entity';
import { DeviceService } from './obgdata.service';

import {
  ApiBearerAuth, ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('devices')
@Controller('devices')
export class DeviceController {

  constructor(private readonly DeviceService: DeviceService) {}

  @Get()
  async findAll(): Promise<DeviceEntity[]> {
    return await this.DeviceService.findAll();
  }

}