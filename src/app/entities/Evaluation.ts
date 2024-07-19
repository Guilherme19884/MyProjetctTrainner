import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import Modalidades from "./Modalidades"
import User from "./User"

@Entity('evaluations')
export class Evaluation {

    @PrimaryGeneratedColumn('increment')
    private id: number = 0

    @Column('date', { nullable: false })
    private date: Date | undefined

    @Column('varchar', { length: 100, nullable:false })
    private locationOfTest: string = ''

    @Column('int', { nullable:false })
    private distanceOfTestInMeters: number = 0

    @Column('int')
    private vo2max: number = 0

    @Column('int')
    private runningRhythm: number = 0

    @Column('enum', { enum: Modalidades, nullable: false })
    modalidade: Modalidades = Modalidades.CORRIDA || Modalidades.CICLISMO || Modalidades.DUATHLON

    @ManyToOne(() => User, user => user.evaluations)
    @JoinColumn({ name: 'user_id' })
    user: User | undefined

    //Escolher modalidade
    public ChooseModality (modalidade: Modalidades): void {
        this.modalidade = modalidade
    }

    //Realizar avaliação de corrida (Teste de Cooper) Importante enfatizar o tempo de 12 minutos, local plano.
    public calculateVo2Max(): void {
        const Vo2max = (this.distanceOfTestInMeters - 504.9) / 44.73
        this.vo2max = Vo2max
    }

    //Estimativa de Ritmo de corrida baseado no vo2máx
    public estimativeMax(): void {
        const speed = this.vo2max / 3.5 
        const rhythm = 60 / speed
        this.runningRhythm = rhythm
    }

    //Estimativa de corrida a 80% do vo2máx


    //Realizar avaliação de ciclismo

}

