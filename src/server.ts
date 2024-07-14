import 'reflect-metadata'
import  express from 'express'
import cors from 'cors'
import { AppDataSource } from './database/data-source'
import routers from './app/routes/routes'

const app = express();

app.use(cors())
app.use(express.json())
app.use('/', routers)

AppDataSource.initialize().then(async() =>{
    console.log('Database Ok! 🎲')
    app.listen(3000, ()=> {
        console.log('Servidor rodando na porta 3000.')
    })
})

