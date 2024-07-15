import IUser from "./IUser"

interface ITrainner {

    id?: number
    location: string
    date: Date
    km: number
    time: number
    intensity: number
    user: IUser 
}

export default ITrainner