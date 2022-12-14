import { Controller, Get } from '@nestjs/common';
import { env } from 'process';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return process.env.WELCOME;
  }
}
