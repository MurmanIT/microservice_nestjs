import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import {
  Ctx,
  EventPattern,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { RabbitMQService } from '../../rabbitmq/rabbitmq.service';

@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly rabbitService: RabbitMQService,
  ) {}

  @EventPattern('create_user')
  async createUser(@Payload() data: any, @Ctx() context: RmqContext) {
    const originalMessage = context.getMessage();
    console.log('->', originalMessage);
    console.log('->', data);
    this.rabbitService.ack(context);
  }

  @MessagePattern('get_user')
  async getUser(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    console.log('Original Message ->', originalMessage);
    console.log('Data->', data);
    channel.ask(originalMessage);
  }
}
