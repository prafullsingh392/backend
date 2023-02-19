function updateJson(inputJSON:any,requestBody:any){
    inputJSON.forEach((data:any) => {
        if(data.id  === requestBody.id){
            if(requestBody.code)
                data['code'] = requestBody.code;
            if(requestBody.quantity)
                data.quantity =  data.quantity + requestBody.quantity;
            if(requestBody.price)
                data.price =  requestBody.price;
        }
    })
    return inputJSON;
}

function removeJson(inputJSON:any,requestBody:any){
    inputJSON.forEach((data:any) => {
        if(data.id  === requestBody.id){
            if(requestBody.code)
                data['code'] = requestBody.code;
            if(requestBody.quantity && data.quantity > requestBody.quantity)
                data.quantity =  data.quantity - requestBody.quantity;
            if(requestBody.price)
                data.price =  requestBody.price;
        }
    })
    return inputJSON;
}

export {
    updateJson,
    removeJson
}