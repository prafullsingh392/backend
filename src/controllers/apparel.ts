"use strict";

import e, { Response, Request, NextFunction } from "express";
import {readFileData,writeInFile} from '../utility/file';
import {updateJson,checkIfStockIsAvailable} from '../utility/jsonOperation';

export const update = async (req:Request, res:Response, next:NextFunction) => {
    let data = await readFileData();
    let output = updateJson(data,req.body);
    if(output)
        writeInFile(output)
    res.send(output ? {status:"success"}:{status:"failure"});
};



export const checkStock = async (req:Request, res:Response, next:NextFunction) => {
    let data = await readFileData();
    if(checkIfStockIsAvailable(data,req.body)){
        res.send({
            status:"success",
            message:"Stock is avaiable"
        })
    }else{
        res.send({
            status:"failure",
            message:"Stock not avaiable"
        })
    }

};

export const checkPrice = (req:Request, res:Response, next:NextFunction) => {
    res.send({name:"Prafull"}); 
};

