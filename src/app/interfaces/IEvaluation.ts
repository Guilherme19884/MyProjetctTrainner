import Modalidades from "../entities/Modalidades";
import User from "../entities/User";

export interface IEvaluation {
    id?: number
    date: Date
    locationOfTest: string
    distanceOfTestInMeters: number
    modalidade: Modalidades
    user: {id: number}
}
