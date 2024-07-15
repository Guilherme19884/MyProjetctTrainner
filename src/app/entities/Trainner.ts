import { Entity, Column, PrimaryGeneratedColumn,  } from "typeorm"

@Entity('trainners')
class Trainner {

    @PrimaryGeneratedColumn('increment')
    id: number = 0

    @Column('varchar', {length:100, nullable: false})
    location: string = ''

    @Column('number', { nullable: false })
    km: number = 0

    @Column('number', { nullable: false })
    time: number = 0

    @Column('number', { nullable: false })
    intensity: number = 0

}

export default Trainner