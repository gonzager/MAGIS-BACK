import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CargoModule } from './modules/cargo/cargo.module';
import { FueroModule } from './modules/fuero/fuero.module';
import { TipocargoModule } from './modules/tipocargo/tipocargo.module';
import { DepartamentojudicialModule } from './modules/departamentojudicial/departamentojudicial.module';
import { OrganismojurisdiccionalModule } from './modules/organismojurisdiccional/organismojurisdiccional.module';
import { EstadocargoModule } from './modules/estadocargo/estadocargo.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/.env.${process.env.NODE_ENV || 'DEV'}`,
      isGlobal: true,
    }),
    DatabaseModule,
    CargoModule,
    FueroModule,
    TipocargoModule,
    DepartamentojudicialModule,
    OrganismojurisdiccionalModule,
    EstadocargoModule,
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
