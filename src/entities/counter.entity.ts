import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn } from "typeorm"

@Entity()
export class Counter {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({default:''})
    description: string;

    @Column({default:0})
    count: number

    @Column({default:false})
    paused: boolean

    @UpdateDateColumn()
    lastTouch: Date
}