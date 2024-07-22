import { DataSource } from 'typeorm'
import "reflect-metadata"
import User from '../app/entities/User'
import Trainner from '../app/entities/Trainner'
import { CreateUsersTable1720275915716 } from './migrations/1720275915716-CreateUsersTable'
import { CreateTrainnersTable1721066270881 } from './migrations/1721066270881-CreateTrainnersTable'
import { AddDateColumnToTrainnersTable1720275915717 } from './migrations/1721136421623-AddDateTrainnersTable'
import { AddTableEvaluation1721664332237 } from './migrations/1721678290348-addTableEvaluations'
import { Evaluation } from '../app/entities/Evaluation'
import { AddColumnsToEvaluation1621664332237 } from './migrations/1721680671508-AddColumnsToEvaluation'


export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'test',
  synchronize: true,
  logging: false,
  entities: [User,Trainner,Evaluation],
  migrations: [CreateUsersTable1720275915716, 
    CreateTrainnersTable1721066270881, 
    AddDateColumnToTrainnersTable1720275915717, 
    AddTableEvaluation1721664332237,
    AddColumnsToEvaluation1621664332237],
  subscribers: [],
})
