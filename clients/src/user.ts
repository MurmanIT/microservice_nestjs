import { NestFactory } from '@nestjs/core';
import { UserModule } from './micros/users/user.module';
import { RabbitMQService } from './rabbitmq/rabbitmq.service';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  const rmqService = app.get<RabbitMQService>(RabbitMQService);
  app.connectMicroservice(rmqService.options('USER'));
  await app.startAllMicroservices();
}

bootstrap();
