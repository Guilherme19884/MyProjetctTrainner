import { AppDataSource } from "../../database/data-source"
import Trainner from "../entities/Trainner"
import User from "../entities/User"
import ITrainner from "../interfaces/ITrainner"

const trainnerRepository = AppDataSource.getRepository(Trainner)
const userRepository = AppDataSource.getRepository(User)

export const getTrainners = async (): Promise<Trainner[]> => {
    return await trainnerRepository.find()
};

export const postTrainner = async (trainner: ITrainner): Promise<void> => {
    // Encontre o usuário no banco de dados
    const user = await userRepository.findOneBy({ id: trainner.user })
    if (!user) {
        throw new Error('User not found')
    }

    // Crie um novo treino e associe ao usuário
    const newTrainner = new Trainner()
    newTrainner.date = new Date()
    newTrainner.timeOfTrainner = trainner.time
    newTrainner.location = trainner.location
    newTrainner.km = trainner.km
    newTrainner.intensity = trainner.intensity
    newTrainner.user = user

    // Salve o treino no banco de dados
    await trainnerRepository.save(newTrainner)
}

export const getTrainnerById = async (id: number): Promise<Trainner | null> => {
    return await trainnerRepository.findOneBy({ id })
}

export const updateTrainner = async (id: number, trainnerData: Partial<Trainner>): Promise<Trainner | null> => {
    const trainner = await trainnerRepository.findOneBy({ id })
    if (!trainner) return null

    // Atualize os campos do treina
    if (trainnerData.timeOfTrainner !== undefined) trainner.timeOfTrainner = trainnerData.timeOfTrainner
    if (trainnerData.location !== undefined) trainner.location = trainnerData.location
    if (trainnerData.km !== undefined) trainner.km = trainnerData.km
    if (trainnerData.intensity !== undefined) trainner.intensity = trainnerData.intensity
    if (trainnerData.date !== undefined) trainner.date = new Date(trainnerData.date)

    // Salve as alterações no banco de dados
    return await trainnerRepository.save(trainner)
}

export {trainnerRepository}
