import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm"
import User from "./User"

@Entity('trainners')
class Trainner {

    @PrimaryGeneratedColumn('increment')
    id: number = 0

    // @Column('date', { nullable: false })
    // date: Date | undefined

    @Column('int', { nullable: false })
    timeOfTrainner: number = 0

    @Column('varchar', {length:100, nullable: false})
    location: string = ''

    @Column('int', { nullable: false })
    km: number = 0

    @Column('int', { nullable: false })
    intensity: number = 0

    @ManyToOne(()=> User, user => user.trainners)
    @JoinColumn({ name: 'user_id' })
    user: User | undefined
}

export default Trainner