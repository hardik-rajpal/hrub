import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Counter {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({default:''})
    description8: string;

    @Column({default:0})
    count: number

    @Column({default:false})
    paused: boolean
}