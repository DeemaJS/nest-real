import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeviceEntity } from './obgdata.entity';

@Injectable()
export class DeviceService {
  constructor(
    @InjectRepository(DeviceEntity)
    private readonly DeviceRepository: Repository<DeviceEntity>
  ) {}

  async findAll(): Promise<DeviceEntity[]> {
    return await this.DeviceRepository.find({take: 10});
  }

}
