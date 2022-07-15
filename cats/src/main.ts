import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpException } from '@nestjs/common';
import { HttpExceptionFilter } from './common/exceptions/http-exception.filter';

async function bootstrap() {
  console.log(process.env.MONGODB_URI);
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  const PORT = process.env.PORT;
  await app.listen(PORT);
}

bootstrap();
