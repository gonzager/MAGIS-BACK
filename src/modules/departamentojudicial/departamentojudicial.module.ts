import { Module } from '@nestjs/common';
import { DepartamentojudicialService } from './departamentojudicial.service';
import { DepartamentojudicialController } from './departamentojudicial.controller';
import { DepartamentoJudicial } from './entities/';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DepartamentoJudicial])],
  controllers: [DepartamentojudicialController],
  providers: [DepartamentojudicialService],
})
export class DepartamentojudicialModule {}
