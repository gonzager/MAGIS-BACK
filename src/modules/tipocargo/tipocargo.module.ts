import { Module } from '@nestjs/common';
import { TipocargoService } from './tipocargo.service';
import { TipocargoController } from './tipocargo.controller';
import { TipoCargo } from './entities/';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TipoCargo])],
  controllers: [TipocargoController],
  providers: [TipocargoService],
})
export class TipocargoModule {}
