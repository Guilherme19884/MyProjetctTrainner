import { AppDataSource } from "../../database/data-source"
import Trainner from "../entities/Trainner"

const trainnerRepository = AppDataSource.getRepository(Trainner)

export const getTrainners = async (): Promise<Trainner[]> => {
    return await trainnerRepository.find()
};

export default trainnerRepository
