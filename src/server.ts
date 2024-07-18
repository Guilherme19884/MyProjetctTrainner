import 'reflect-metadata'
import  express from 'express'
import cors from 'cors'
import { AppDataSource } from './database/data-source'
import routers from './app/routes/routes'
import dotenv from 'dotenv'

dotenv.config()
const port = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use('/', routers)


AppDataSource.initialize().then(async() =>{
    console.log('Database Ok! 🎲')
    app.listen(port, ()=> {
        console.log(`Servidor rodando na porta ${port}`)
    })
})

