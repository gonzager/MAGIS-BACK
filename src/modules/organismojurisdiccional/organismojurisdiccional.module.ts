import { Module } from '@nestjs/common';
import { OrganismojurisdiccionalService } from './organismojurisdiccional.service';
import { OrganismojurisdiccionalController } from './organismojurisdiccional.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganismoJurisdiccional } from './entities/';

@Module({
  imports: [TypeOrmModule.forFeature([OrganismoJurisdiccional])],
  controllers: [OrganismojurisdiccionalController],
  providers: [OrganismojurisdiccionalService],
})
export class OrganismojurisdiccionalModule {}
