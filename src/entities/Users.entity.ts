import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm"
import { Profile } from "./Profile.entity"
import { Todo } from "./Todo.entity"
@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    firstName: string
    @Column()
    lastName: string
    @Column()
    age: number
    @OneToOne(()=>Profile,{cascade:true})
    @JoinColumn()
    profile:Profile
    @OneToMany(()=>Todo,(todo)=>todo.user)
    todos:Todo[]
}
