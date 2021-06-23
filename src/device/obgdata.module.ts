import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { DeviceService } from './obgdata.service';
import { DeviceEntity } from './obgdata.entity';
import { DeviceController } from './obgdata.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DeviceEntity]), UserModule],
  providers: [DeviceService],
  controllers: [
    DeviceController
  ],
  exports: []
})
export class DeviceModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
  }
}
