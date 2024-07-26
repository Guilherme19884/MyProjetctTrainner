import { Request, Response, Router } from "express"
import { getAllEvaluation } from "../repositories/EvaluationRepository"


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
evaluationRouter.get('/:id',()=>{})

//Inserir Avaliação
evaluationRouter.post('/:id',()=>{})

//Atualizar Avaliação
evaluationRouter.put('/:id',()=>{})

//Deletar Avalaiação
evaluationRouter.delete('/:id',()=>{})

export default evaluationRouter