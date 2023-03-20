import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class UserService {
  private logger: Logger;

  constructor() {
    this.logger = new Logger(UserService.name);
  }
}
