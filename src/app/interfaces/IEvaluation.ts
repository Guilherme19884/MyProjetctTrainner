import Modalidades from "../entities/Modalidades";
import User from "../entities/User";

export interface IEvaluation {
    id?: number
    date: Date
    locationOfTest: string
    distanceOfTestInMeters: number
    vo2max?: number
    runningRhythm?: number
    distanceOfTestInKm: number
    modalidade: Modalidades
    user: User
}
