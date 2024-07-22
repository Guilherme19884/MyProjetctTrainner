import { Router } from  'express'
import  userRouter from '../controllers/UserController'
import  trainnerRouter from '../controllers/TrainnerController'
import { LoginController } from '../controllers/loginController'

const routers = Router()
const loginController = new LoginController()

routers.use('/users', userRouter)
routers.use('/trainners', trainnerRouter)
routers.use('/evaluations' evaluationRouter)

routers.post('/login', loginController.login)

export default routers