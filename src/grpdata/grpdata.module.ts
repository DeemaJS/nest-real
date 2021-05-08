import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { CensorService } from './grpdata.service';
import { CensorEntity } from './grpdata.entity';
import { CensorController } from './grpdata.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CensorEntity]), UserModule],
  providers: [CensorService],
  controllers: [
    CensorController
  ],
  exports: []
})
export class CensorModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
  }
}
