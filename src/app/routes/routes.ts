import { Router } from  'express'
import  userRouter from '../controllers/UserController'
import  trainnerRouter from '../controllers/TrainnerController'
import { LoginController } from '../controllers/loginController'
import evaluationRouter from '../controllers/EvaluationController'
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from '../../swagger.json'
import doc from '../../swagger'

const routers = Router()
const loginController = new LoginController()

routers.use('/users', userRouter)
routers.use('/trainners', trainnerRouter)
routers.use('/evaluations', evaluationRouter)

routers.post('/login', loginController.login)

routers.use('/documentation', swaggerUi.serve, swaggerUi.setup( swaggerDocs ))

export default routers