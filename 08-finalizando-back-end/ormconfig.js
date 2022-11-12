require('dotenv/config');

const config = [
  {
    name: 'default',
    type: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
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
    cli: {
      migrationsDir: './src/shared/infra/typeorm/migrations',
    },
  },
  {
    name: 'mongo',
    type: 'mongodb',
    host: process.env.MONGO_HOST,
    port: process.env.MONGO_PORT,
    database: process.env.MONGO_NAME,
    useUnifiedTopology: true,
    entities: [
      process.env.NODE_ENV === 'production'
        ? './dist/modules/**/infra/typeorm/schemas/*.js'
        : './src/modules/**/infra/typeorm/schemas/*.ts',
    ],
  },
];

// Adiciona certificados SSL para o BD
if (process.env.DB_SSL === 'true') {
  config[0].ssl = true;
  config[0].extra = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

module.exports = config;
