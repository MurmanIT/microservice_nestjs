import { NestFactory } from '@nestjs/core';
import { RabbitMQService } from './rabbitmq/rabbitmq.service';
import { AuthModule } from './micros/auth/auth.module';

async function bootstrap() {
  
  const app = await NestFactory.create(AuthModule);
  const rmqService = app.get<RabbitMQService>(RabbitMQService);
  app.connectMicroservice(rmqService.options('auth'));
  await app.startAllMicroservices();
}

bootstrap();
