import { Request, Response, Router } from "express"
import  * as trainnerRepository from "../repositories/TrainnerRepository" // Importa a função corretamente
import ITrainner from "../interfaces/ITrainner"

const trainnerRouter = Router()

trainnerRouter.get('/', async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
        const trainners = await trainnerRepository.getTrainners() // Chama a função getTrainners
        return res.status(200).json(trainners)
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' })
    }
})

trainnerRouter.post('/', async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
        const { date, location, km, time, intensity, userId } = req.body

        const trainner: ITrainner = { date: new Date(date), location, km, time, intensity, user: userId }

        await trainnerRepository.postTrainner(trainner)

        return res.status(201).json({ message: 'Trainner created successfully' })
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' })
    }
})

trainnerRouter.get('/:id', async(req: Request, res: Response): Promise<Response> =>{
    try {
        const id = Number(req.params.id)
        const trainner = await trainnerRepository.getTrainnerById(id)
        if(!id){
            res.status(404).json({error: 'Treino não encontrado'})
        }
        return res.status(200).json(trainner)
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' })
    }
})

trainnerRouter.put('/:id', async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid ID format' })
        }

        const {date, location, km, intensity}: ITrainner = req.body

        // Atualize o treinador
        const updatedTrainner = await trainnerRepository.updateTrainner(id, {date, location, km, intensity})
        if (!updatedTrainner) {
            return res.status(404).json({ error: 'Usuário não encontrado!' })
        }

        return res.status(200).json(updatedTrainner)
    } catch (error) {
        console.error('Error updating trainner:', error) // Log do erro para depuração
        return res.status(500).json({ error: 'Erro interno!' })
    }
})
export default trainnerRouter
