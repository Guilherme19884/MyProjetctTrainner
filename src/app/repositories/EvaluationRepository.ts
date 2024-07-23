import { AppDataSource } from "../../database/data-source"
import { Evaluation } from "../entities/Evaluation"


const evaluationRepository = AppDataSource.getRepository(Evaluation)

export const getAllEvaluation = async ():Promise < Evaluation[] > =>{
    return await evaluationRepository.find()
}