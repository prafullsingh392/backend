"use strict";

import { Response, Request, NextFunction } from "express";
import {readFileData,writeInFile} from '../utility/file';
import {updateJson} from '../utility/jsonOperation';

export const update = async (req:Request, res:Response, next:NextFunction) => {
    let data = await readFileData();
    let output = updateJson(data,req.body);
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

