"use strict";

import e, { Response, Request, NextFunction } from "express";
import {readFileData,writeInFile} from '../utility/file';
import {updateJson,checkIfStockIsAvailable,checkStockPrice} from '../utility/jsonOperation';

export const defaultRoute = async (req:Request, res:Response, next:NextFunction) => {
    res.send(  {status:"ok"});
};


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

export const checkPrice = async (req:Request, res:Response, next:NextFunction) => {
    let data = await readFileData();
    let price = checkStockPrice(data,req.body);
    if(price > 0){
        res.send({
            status:"success",
            message:"Stock is Available",
            price
        })
    }else{
        res.send({
            status:"failure",
            message:"Stock not avaiable"
        })
    }
};

