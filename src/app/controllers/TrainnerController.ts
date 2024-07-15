import { Request, Response, Router } from "express"
import { getTrainners } from "../repositories/TrainnerRepository" // Importa a função corretamente

const trainnerRouter = Router()

trainnerRouter.get('/', async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
        const trainners = await getTrainners() // Chama a função getTrainners
        return res.status(200).json(trainners)
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' })
    }
})

export default trainnerRouter
