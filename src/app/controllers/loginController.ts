import { Request, Response } from "express"
import { sign } from "jsonwebtoken"
import UserRepository from "../repositories/UserRepository"

export class LoginController {
    login = async (req: Request, response: Response) => {
        const { email, password } = req.body;

        const user = await UserRepository.getUserByEmailAndPassword(email, password)
        if (!user) {
            return response.status(401).json({ error: 'Usuário não encontrado ou senha incorreta' })
        }

        const tokenData = {
            name: user.name,
            email: user.email
        }

        const tokenKey = '12345'

        const tokenOptions = {
            subject: String(user.id),
            expiresIn: '1h' // Adicionado tempo de expiração
        }

        const token = sign(tokenData, tokenKey, tokenOptions)

        return response.status(200).json({ token })
    }
}
