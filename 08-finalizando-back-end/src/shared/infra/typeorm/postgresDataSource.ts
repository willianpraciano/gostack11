import 'dotenv/config';
import { DataSource } from 'typeorm';

export const postgresDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: String(process.env.DB_PASS),
  database: process.env.DB_NAME,
  entities: [
    process.env.NODE_ENV === 'production'
      ? './dist/modules/**/infra/typeorm/entities/*.js'
      : './src/modules/**/infra/typeorm/entities/*.ts',
  ],
  migrations: [
    process.env.NODE_ENV === 'production'
      ? './dist/shared/infra/typeorm/migrations/*.js'
      : './src/shared/infra/typeorm/migrations/*.ts',
  ],
});
