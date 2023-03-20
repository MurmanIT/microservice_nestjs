import { NestFactory } from '@nestjs/core';
import { RabbitMQService } from './rabbitmq/rabbitmq.service';
import { WalletModule } from './micros/wallet/wallet.module';

async function bootstrap() {
  const app = await NestFactory.create(WalletModule);
  const rmqService = app.get<RabbitMQService>(RabbitMQService);
  app.connectMicroservice(rmqService.options('wallet'));
  await app.startAllMicroservices();
}

bootstrap();
