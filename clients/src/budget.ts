import { NestFactory } from '@nestjs/core';
import { RabbitMQService } from './rabbitmq/rabbitmq.service';
import { BudgetModule } from './micros/budget/budget.module';

async function bootstrap() {
  
  const app = await NestFactory.create(BudgetModule);
  const rmqService = app.get<RabbitMQService>(RabbitMQService);
  app.connectMicroservice(rmqService.options('budget'));
  await app.startAllMicroservices();
}

bootstrap();
