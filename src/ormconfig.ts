import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'meduimclone',
  password: '123',
  database: 'meduimclone',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};
export default config;
