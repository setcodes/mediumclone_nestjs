import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService {
  findAll(): string[] {
    return ['bmw', 'kia', 'mercedes1'];
  }
}
