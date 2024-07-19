import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import Modalidades from "./Modalidades";
import User from "./User";

@Entity('evaluations')
export class Evaluation{

    @PrimaryGeneratedColumn('increment')
    private id: number = 0

    @Column('date', { nullable: false })
    private date: Date | undefined

    @Column('varchar', { length: 100, nullable:false })
    private locationOfTest: string = ''

    @Column('enum', { enum: Modalidades, nullable: false })
    modalidade: Modalidades = Modalidades.CORRIDA || Modalidades.CICLISMO || Modalidades.DUATHLON

    @ManyToOne(() => User, user => user.evaluations)
    @JoinColumn({ name: 'user_id' })
    user: User | undefined
}