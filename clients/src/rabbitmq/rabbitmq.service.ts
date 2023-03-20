import { Injectable } from '@nestjs/common';
import { RmqContext, RmqOptions, Transport } from '@nestjs/microservices';
import { getQuery } from './get-query';

@Injectable()
export class RabbitMQService {
  options(name: string): RmqOptions {
    return {
      transport: Transport.RMQ,
      options: {
        urls: [`${process.env.RABBIT_MQ_URI}`],
        queue: getQuery(name),
      },
    };
  }

  ack(context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    channel.ack(originalMessage);
  }
}
