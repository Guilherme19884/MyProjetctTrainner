import User from "../entities/User"
import IUser from "../interfaces/IUser"
import { AppDataSource } from "../../database/data-source"

const userRepository = AppDataSource.getRepository(User)


const getUsers = async (): Promise<User[]> =>{
    return await userRepository.find()
}

const postUsers = async (user: IUser): Promise <void> =>{
    const newUser = new User()
    newUser.name = user.name 
    newUser.email = user.email
    newUser.password = user.password

    await userRepository.save(newUser)
}

const getUserById = async (id: number): Promise<User | null> => {
    return await userRepository.findOneBy({ id })
}

const updateUser = async (id: number, userData: Partial<User>): Promise<User | null> => {
    const user = await userRepository.findOneBy({ id })
    if (!user) return null
    userRepository.merge(user, userData)
    return await userRepository.save(user)
}

const deleteUser = async (id: number): Promise<boolean> => {
    const result = await userRepository.delete(id)
    return result.affected !== 0
}

const getUserByEmailAndPassword = async(email: string, password: string): Promise<User | null> =>{
    return await userRepository.findOneBy({ email, password })
}

export default { getUsers, postUsers, getUserById, updateUser, deleteUser, getUserByEmailAndPassword }

