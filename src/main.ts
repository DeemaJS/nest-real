import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const appOptions = {cors: true, logger: true,};
  const app = await NestFactory.create(ApplicationModule, appOptions);
  // app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
    .setTitle('NestJS Device App')
    .setDescription('The Device API description')
    .setVersion('1.0')
    .setBasePath('api')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document);

  await app.listen(5000);
}
bootstrap();