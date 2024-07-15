import ITrainner from "./ITrainner";

interface IUser {
    id?: number;
    name: string;
    email: string;
    password: string;
    trainners?: ITrainner[]; // Adiciona a referência aos treinos
}

export default IUser;
