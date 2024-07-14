import { Router } from  'express'
import userRouter from '../controllers/UserController'
import { LoginController } from '../controllers/loginController'

const routers = Router()
const loginController = new LoginController()

routers.use('/users', userRouter)

routers.post('/login', loginController.login)

export default routers