import { DynamicModule, Module } from '@nestjs/common';
import { RabbitMQService } from './rabbitmq.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { getQuery } from './get-query';

interface RabbitModuleOptions {
  name: string;
}

@Module({
  providers: [RabbitMQService],
  exports: [RabbitMQService],
})
export class RabbitMQModule {
  static register({ name }: RabbitModuleOptions): DynamicModule {
    return {
      module: RabbitMQModule,
      imports: [
        ClientsModule.registerAsync([
          {
            name: name,
            useFactory: () => {
              return {
                transport: Transport.RMQ,
                options: {
                  urls: [`${process.env.RABBIT_MQ_URI}`],
                  queue: getQuery(name),
                },
              };
            },
          },
        ]),
      ],
      exports: [ClientsModule],
    };
  }
}
