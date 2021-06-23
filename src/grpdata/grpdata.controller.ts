import {Get, Controller } from '@nestjs/common';

import { CensorEntity } from './grpdata.entity';
import { CensorService } from './grpdata.service';

import {
  ApiBearerAuth, ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('censors')
@Controller('censors')
export class CensorController {

  constructor(private readonly censorService: CensorService) {}

  @Get()
  async findAll(): Promise<CensorEntity[]> {
    return await this.censorService.findAll();
  }

}