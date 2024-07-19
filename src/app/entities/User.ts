import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import Trainner from "./Trainner";
import { Evaluation } from "./Evaluation";

@Entity('users')
class User {

    @PrimaryGeneratedColumn('increment')
    id: number = 0

    @Column('varchar', { length:100, nullable: false })
    name: string = ''

    @Column('varchar', { length:100, nullable: false, unique: true})
    email: string = ''

    @Column('varchar', {length:8, nullable: false})
    password: string = ''

    @OneToMany(() => Trainner, trainner => trainner.user)
    trainners: Trainner[] | undefined

    @OneToMany(() => Evaluation, evaluation => evaluation.user)
    evaluations: Evaluation[] | undefined
}

export default User