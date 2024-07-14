import { DataSource } from 'typeorm'
import "reflect-metadata"
import { CreateUsersTable1720275915716 } from './migrations/1720275915716-CreateUsersTable'
import User from '../app/entities/User';


export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'test',
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [CreateUsersTable1720275915716],
  subscribers: [],
});
