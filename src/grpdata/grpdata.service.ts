import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CensorEntity } from './grpdata.entity';

@Injectable()
export class CensorService {
  constructor(
    @InjectRepository(CensorEntity)
    private readonly censorRepository: Repository<CensorEntity>
  ) {}

  async findAll(): Promise<CensorEntity[]> {
    return await this.censorRepository.find({take: 10});
  }

}
