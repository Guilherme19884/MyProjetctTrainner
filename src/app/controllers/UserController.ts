import { Request, Response, Router } from 'express'
import User from '../entities/User'
import UserRepository from "../repositories/UserRepository"
import IUser from '../interfaces/IUser'

const userRouter = Router()

userRouter.get('/', async(req: Request, resp: Response): Promise<Response | undefined> => {
    try{
        const users = await UserRepository.getUsers()
        return resp.status(200).json(users)
    }catch(error){
        resp.status(500).json({error: 'Internal Server Error'})
    }
})

userRouter.post('/', async (req: Request, res: Response): Promise<Response> => {
    try {
        const { name, email, password }: IUser = req.body;const user: IUser = req.body
        await UserRepository.postUsers(user)
        return res.status(201).json({ message: "Usuário adicionado." })
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' })
    }
})

userRouter.get('/:id', async (req: Request, res: Response): Promise<Response> => {
    try{
        const user = await UserRepository.getUserById(Number(req.params.id))
        if (!user) return res.status(404).json({ error: 'Usuário não encontrado!' })
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' })
    }

})

userRouter.put('/:id', async(req: Request, res: Response): Promise<Response> =>{
    try{
        const  { name, email, password }: IUser = req.body;
        const updatedUser = await UserRepository.updateUser(Number(req.params.id), { name, email, password })
        if(!updatedUser){
            return res.status(404).json({error: 'Usuário não encontrado!'})
        }
        return res.status(200).json(updatedUser)
    }catch(error){
            return res.status(500).json({error: 'Erro interno!'})
    }
})

userRouter.delete('/:id', async (req: Request, res: Response): Promise<Response> => {
    try {
        const deleted = await UserRepository.deleteUser(Number(req.params.id))
        if (!deleted) return res.status(404).json({ error: 'User not found' })
        return res.status(204).send()
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' })
    }
})

userRouter.post('/login', async (req: Request, resp: Response): Promise<Response> =>{
    const user = await UserRepository.getUserByEmailAndPassword(req.params.email, req.params.password)
    if(!user) return resp.status(404).json({ error: 'Usuário não encontrado'})
        return resp.status(200).json(user)
})


export default userRouter

