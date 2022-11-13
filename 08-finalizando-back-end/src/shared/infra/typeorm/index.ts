import { postgresDataSource } from './postgresDataSource';
import { mongoDataSource } from './mongoDBDataSource';

export * from './postgresDataSource';
export * from './mongoDBDataSource';

export async function createDBConnection() {
  await postgresDataSource.initialize();
  await mongoDataSource.initialize();
  return;
}
