import { Module } from '@nestjs/common';
import { EstadocargoService } from './estadocargo.service';
import { EstadocargoController } from './estadocargo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadoCargo } from './entities/';

@Module({
  imports: [TypeOrmModule.forFeature([EstadoCargo])],
  controllers: [EstadocargoController],
  providers: [EstadocargoService],
})
export class EstadocargoModule {}
