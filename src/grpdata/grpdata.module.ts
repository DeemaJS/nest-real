import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { TagService } from './grpdata.service';
// import { TagEntity } from './grpdata.entity';
import { TagController } from './grpdata.controller';

@Module({
  imports: [TypeOrmModule.forFeature([]), UserModule],
  providers: [TagService],
  controllers: [
    TagController
  ],
  exports: []
})
export class TagModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
  }
}
