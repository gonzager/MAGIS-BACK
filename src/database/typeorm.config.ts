import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { join } from 'path';

export const typeOrmAsynConfig: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost33',
      port: parseInt(process.env.DATABASE_PORT) || 5432,
      username: process.env.DATABASE_USER || 'postgres',
      password: process.env.DATABASE_PASS || 'postgres',
      database: process.env.DATABASE_NAME || 'gesmagis',
      entities: [
        join(__dirname, '..', 'modules/**/entities/*.entity{.ts,.js}'),
      ],
      migrations: [join(__dirname, 'migrations/*{.ts,.js}')],
      extra: {
        charset: 'utf8mb4_unicode_ci',
      },
      synchronize: process.env.DATABASE_SYNCHRONIZE === 'true' ? true : false,
      logging: process.env.DATABASE_LOGGING === 'true' ? true : false,
    };
  },
};
