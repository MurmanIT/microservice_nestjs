import { Module } from '@nestjs/common';
import { RabbitMQModule } from '@app/rabbitmq/rabbitmq.module';

@Module({
  imports: [RabbitMQModule],
  controllers: [],
  providers: [],
})
export class AuthModule {}
