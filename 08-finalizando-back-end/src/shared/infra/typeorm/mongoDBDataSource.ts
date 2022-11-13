import 'dotenv/config';
import { DataSource } from 'typeorm';

export const mongoDataSource = new DataSource({
  name: 'mongo',
  type: 'mongodb',
  host: process.env.MONGO_HOST,
  port: Number(process.env.MONGO_PORT),
  database: process.env.MONGO_NAME,
  useUnifiedTopology: true,
  entities: [
    process.env.NODE_ENV === 'production'
      ? './dist/modules/**/infra/typeorm/schemas/*.js'
      : './src/modules/**/infra/typeorm/schemas/*.ts',
  ],
});
