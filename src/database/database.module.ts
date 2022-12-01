import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsynConfig } from './typeorm.config';

@Module({
  imports: [TypeOrmModule.forRootAsync(typeOrmAsynConfig)],
})
export class DatabaseModule {}
