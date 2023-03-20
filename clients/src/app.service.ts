import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  private logger: Logger;

  constructor(@Inject('USER') private userClient: ClientProxy) {
    this.logger = new Logger(AppService.name);
  }

  async createUser(user: string) {
    await lastValueFrom(
      this.userClient.emit('create_user', { user: user })
    )
  }
}
