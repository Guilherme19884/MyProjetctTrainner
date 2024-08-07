import { Request, Response, Router } from "express"
import { getAllEvaluation, postEvaluation, getEvaluationById, updateEvaluation, deleteEvaluation } from "../repositories/EvaluationRepository"
import { IEvaluation } from "../interfaces/IEvaluation"


const evaluationRouter = Router()

//getAll
evaluationRouter.get('/', async (req: Request, res: Response): Promise < Response | undefined> =>{
    try {
        const evaluations = await getAllEvaluation()
        return res.status(200).json(evaluations)
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' })
    }
})

//getID
evaluationRouter.get('/:id', async(req: Request, res: Response): Promise<Response>=>{
    try {
        const id = Number(req.params.id)
        const evaluation = await getEvaluationById(id)
        if(!id){
            return res.status(400).json({ error: 'Avaliação não encontrada'})
        }
        return res.status(200).json(evaluation)
    } catch (error) {
        return res.status(500).json({ error: 'Server internal error'})
    }
})

//Inserir Avaliação
evaluationRouter.post('/', async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
        const { date, locationOfTest, distanceOfTestInMeters, modalidade, userId } = req.body

        const evaluation: IEvaluation = { 
            date: new Date(date), 
            locationOfTest, 
            distanceOfTestInMeters, 
            modalidade, 
            user: { id: userId }
        }

        await postEvaluation(evaluation);

        return res.status(201).json({ message: 'Evaluation created successfully' })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' })
    }
})

//Atualizar Avaliação
evaluationRouter.put('/:id', async(req: Request, res: Response): Promise <Response>=>{
    const id = Number(req.params.id)
    if(!id){return res.status(400).json({ error: 'Avalaiação não encontrada'})}
    
    const {date, locationOfTest, distanceOfTestInMeters, modalidade}: IEvaluation = req.body
    const updatedEvaluation =  await updateEvaluation(id, { date, locationOfTest, distanceOfTestInMeters, modalidade })
    return res.status(200).json(updatedEvaluation)
})

//Deletar Avaliação
evaluationRouter.delete('/:id', async(req: Request, res: Response): Promise<Response> =>{
    try {
        const id = Number(req.params.id)
        if(!id){
            return res.status(400).json({ error: 'Avaliação não encontrado'})
        }
        const deleted = await deleteEvaluation(id)
        if (!deleted) return res.status(404).json({ error: 'User not found' })
        return res.status(204).json()
    } catch (error) {
        console.error('Error updating trainner:', error) // Log do erro para depuração
            return res.status(500).json({ error: 'Erro interno!' })
    }
})

export default evaluationRouter