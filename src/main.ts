import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global prefix
  app.setGlobalPrefix('api');

  // Cors
  app.enableCors();

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Yondo App')
    .setDescription('Yondo App API')
    .setVersion('1.0')
    .addTag('Yondo App')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 5472);
}
bootstrap();
