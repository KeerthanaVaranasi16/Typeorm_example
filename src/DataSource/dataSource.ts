import { DataSource } from "typeorm";
import {Users} from '../entities/Users.entity'
import { Profile } from "../entities/Profile.entity";
const AppDataSource=new DataSource({
    type:"postgres",
    host:"localhost",
    port:5432,
    username:"postgres",
    password:"postgre",
    database:"Testing",
    logging:true,
    synchronize:true,
    entities:[
        Users,
        Profile
    ]
});

export default AppDataSource;