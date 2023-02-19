"use strict";

import { Response, Request, NextFunction } from "express";
import {readFileData,writeInFile} from '../utility/file';
import {removeJson,updateJson} from '../utility/jsonOperation';

export const update = async (req:Request, res:Response, next:NextFunction) => {
    let data = await readFileData();
    let output = null;
    const {type} = req.body; 
    switch(type){
        case 'ADD':{
            output = updateJson(data,req.body)
            break;
        }
        case 'REMOVE':{
            output = removeJson(data,req.body)
            break;
        }
    }
    if(output)
        writeInFile(output)
    res.send(output ? {status:"success"}:{status:"failure"});
};



export const checkStock = (req:Request, res:Response, next:NextFunction) => {
    res.send({name:"Prafull"}); 
};

export const checkPrice = (req:Request, res:Response, next:NextFunction) => {
    res.send({name:"Prafull"}); 
};

