import e from "cors"
import { AppDataSource } from "../../database/data-source"
import { Evaluation } from "../entities/Evaluation"
import User from "../entities/User"
import { IEvaluation } from "../interfaces/IEvaluation"


export const evaluationRepository = AppDataSource.getRepository(Evaluation)
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
    newEvaluation.distanceOfTestInMeters = evaluationData.distanceOfTestInMeters || 0
    newEvaluation.modalidade = evaluationData.modalidade
    newEvaluation.user = user

    // Salve a avaliação no banco de dados
    await evaluationRepository.save(newEvaluation);
}

export const getEvaluationById = async (id: number): Promise<Evaluation | null> => {
    return await evaluationRepository.findOneBy({ id })
}

export const updateEvaluation = async(id: number, evaluationData: Partial <Evaluation>): Promise<Evaluation | null> =>{
    const evaluation = await evaluationRepository.findOneBy({ id })
    if (!evaluation) return null

    if (evaluationData.date !== undefined) evaluation.date = evaluationData.date
    if (evaluationData.locationOfTest !== undefined) evaluation.locationOfTest = evaluationData.locationOfTest
    if (evaluationData.distanceOfTestInMeters !== undefined) evaluation.distanceOfTestInMeters = evaluationData.distanceOfTestInMeters
    if (evaluationData.modalidade !== undefined) evaluation.modalidade = evaluationData.modalidade

    return await evaluationRepository.save(evaluation)
}

export const deleteEvalution = async(id: number): Promise<Boolean> =>{
    const result = await evaluationRepository.delete(id)
    return result.affected !== 0
}