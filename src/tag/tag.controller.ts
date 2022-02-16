import { Controller, Get } from '@nestjs/common';

@Controller('tags')
export class TagController {
  @Get()
  findAll() {
    return ['bmw', 'kia'];
  }
}
