import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm"
import User from "./User"

@Entity('trainners')
class Trainner {

    @PrimaryGeneratedColumn('increment')
    id: number = 0;

    @Column('date', { nullable: false })
    date: Date | undefined;

    @Column('int', { nullable: false })
    timeOfTrainner: number = 0; // Em minutos

    @Column('varchar', { length: 100, nullable: false })
    location: string = '';

    @Column('int', { nullable: false })
    km: number = 0;

    @Column('int', { nullable: false })
    intensity: number = 0;

    @ManyToOne(() => User, user => user.trainners)
    @JoinColumn({ name: 'user_id' })
    user: User | undefined;

    // Calcular o ritmo da corrida min/km
    public calculateRhythm(): number {
        if (this.km === 0) {
            throw new Error("Km cannot be zero")
        }
        return this.timeOfTrainner / this.km
    }

    // Calcular a média de velocidade km/h
    public calculateAverageSpeed(): number {
        if (this.timeOfTrainner === 0) {
            throw new Error("Time of Trainner cannot be zero")
        }
        const timeInHours = this.timeOfTrainner / 60 // Convertendo minutos para horas
        return this.km / timeInHours
    }
}

export default Trainner;
