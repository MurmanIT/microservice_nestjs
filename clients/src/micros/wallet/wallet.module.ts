import { Module } from '@nestjs/common';
import { RabbitMQModule } from '@app/rabbitmq/rabbitmq.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    RabbitMQModule],
  controllers: [],
  providers: [],
})
export class WalletModule {}
