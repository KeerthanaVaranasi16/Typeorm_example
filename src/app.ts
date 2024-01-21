import "reflect-metadata";
import express from "express";
import dataSource from './DataSource/dataSource';
import { Users } from "./entities/Users.entity";
import bodyParser from "body-parser";
import router from "./Routes/routes";

const app=express();
const port=3000;
app.use(bodyParser.json());

dataSource.initialize()
  .then(() => {
    console.log("connected")
  })
  .catch((err) => console.log("error while connecting",err));

app.use(express.json())
app.use('/',router)

app.listen(port,function(){
    console.log("Running")
})