import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

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


}

export default User