import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { DataSource } from 'typeorm';
ConfigModule.forRoot({
  envFilePath: `${process.cwd()}/.env.${process.env.NODE_ENV || 'DEV'}`,
  isGlobal: true,
});

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASS || 'postgres',
  database: process.env.DATABASE_NAME || 'gesmagis',
  entities: [
    'dist/modules/**/entities/*.entity{.ts,.js}',
    join(__dirname, '..', 'modules/**/entities/*.entity{.ts,.js}'),
  ],
  migrations: ['src/database/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
  synchronize: !!process.env.DATABASE_SYNCHRONIZE,
  logging: !!process.env.DATABASE_LOGGING,
});

export = { dataSource };
