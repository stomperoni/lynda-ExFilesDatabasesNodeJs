const bunyan = require('bunyan');

const appname = 'Shopsy';

module.exports = {
  applicationName: appname,
  logger: bunyan.createLogger({ name: appname }),
  mongodb: {
    dsn: 'mongodb://localhost:37017/shopsy',
  },
  redis: {
    options: { port: 6388 },
  },
  mysql: {
    options: {
      host: 'localhost',
      port: 33068,
      database: 'shopsy',
      dialect: 'mysql',
      username: 'root',
      password: 'root',
    },
  },
};
