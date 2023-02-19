"use strict";

import { Response, Request, NextFunction } from "express";



export const updateCodeNSize = (req:Request, res:Response, next:NextFunction) => {
    res.send(req); 
};

export const updateQuantity = (req:Request, res:Response, next:NextFunction) => {
    res.send({name:"Prafull"}); 
};

export const checkStock = (req:Request, res:Response, next:NextFunction) => {
    res.send({name:"Prafull"}); 
};

export const checkPrice = (req:Request, res:Response, next:NextFunction) => {
    res.send({name:"Prafull"}); 
};

