import { AppDataSource } from "../../database/data-source"
import { Evaluation } from "../entities/Evaluation"
import User from "../entities/User"
import { IEvaluation } from "../interfaces/IEvaluation"


const evaluationRepository = AppDataSource.getRepository(Evaluation)
const userRepository = AppDataSource.getRepository(User)

export const getAllEvaluation = async ():Promise < Evaluation[] > =>{
    return await evaluationRepository.find()
}

export const postEvaluation = async (evaluationData: IEvaluation): Promise<void> => {
    // Encontre o usuário no banco de dados
    const user = await userRepository.findOneBy({ id: evaluationData.user.id });
    if (!user) {
        throw new Error('User not found');
    }

    // Crie uma nova avaliação e associe ao usuário
    const newEvaluation = new Evaluation()
    newEvaluation.date = evaluationData.date
    newEvaluation.locationOfTest = evaluationData.locationOfTest
    newEvaluation.distanceOfTestInMeters = evaluationData.distanceOfTestInMeters
    newEvaluation.modalidade = evaluationData.modalidade
    newEvaluation.user = user

    // Salve a avaliação no banco de dados
    await evaluationRepository.save(newEvaluation);
}