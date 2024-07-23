import { Request, Response, Router } from "express"


const evaluationRouter = Router()

//getAll
evaluationRouter.get('/', ()=>{})

//getID
evaluationRouter.get('/:id',()=>{})

//Inserir Avaliação
evaluationRouter.post('/:id',()=>{})

//Atualizar Avaliação
evaluationRouter.put('/:id',()=>{})

//Deletar Avalaiação
evaluationRouter.delete('/:id',()=>{})

