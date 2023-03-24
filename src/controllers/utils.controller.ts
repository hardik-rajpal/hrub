import { Counter } from "@/entities/counter.entity";
import { Request, Response } from "express";
import { getRepository } from "typeorm";

export default class UtilsController{
    public async addToCounter(req:Request,res:Response){
        const body = (req.body);
        //extract counter id, add auth header bro.
        const counterIdObj = {};
        const counterUpdateObj = {};
        getRepository(Counter).update(counterIdObj,counterUpdateObj);
    }
}