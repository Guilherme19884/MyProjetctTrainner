import { Request, Response, Router } from "express"
import { getTrainners, postTrainner } from "../repositories/TrainnerRepository" // Importa a função corretamente
import ITrainner from "../interfaces/ITrainner"

const trainnerRouter = Router()

trainnerRouter.get('/', async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
        const trainners = await getTrainners() // Chama a função getTrainners
        return res.status(200).json(trainners)
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' })
    }
})

trainnerRouter.post('/', async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
        const { date, location, km, time, intensity, userId } = req.body;

        const trainner: ITrainner = { date: new Date(date), location, km, time, intensity, user: userId };;

        await postTrainner(trainner);

        return res.status(201).json({ message: 'Trainner created successfully' });
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});
export default trainnerRouter
