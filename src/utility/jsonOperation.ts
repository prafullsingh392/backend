function updateJson(inputJSON:any,requestBody:any){
    requestBody.forEach((request:any)=>{
        
        inputJSON.forEach((data:any) => {
            if(data.id  === request.id){
                if(request.code)
                    data.code = request.code;
                if(request.quantity)
                    data.quantity =  request.quantity;
                if(request.price)
                    data.price =  request.price;
            }
        })
    

    })

    
    return inputJSON;
}



export {
    updateJson
}