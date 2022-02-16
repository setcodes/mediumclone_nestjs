import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async createUser(): Promise<any> {
    return await 'users from service';
  }
}
