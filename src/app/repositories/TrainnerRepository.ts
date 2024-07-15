import { AppDataSource } from "../../database/data-source"
import Trainner from "../entities/Trainner"
import ITrainner from "../interfaces/ITrainner"
import { DataSource } from "typeorm"

const trainnerRepository = AppDataSource.getRepository(Trainner)

const getTrainners = async(): Promise<Trainner[]> =>{
    return await trainnerRepository.find()
}
