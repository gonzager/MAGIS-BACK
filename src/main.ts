import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './utils';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  setupSwagger(app);
  await app.listen(parseInt(process.env.PORT) || 4999, async () => {
    console.log(`Let's Rock ${await app.getUrl()}`);
  });
}
bootstrap();
