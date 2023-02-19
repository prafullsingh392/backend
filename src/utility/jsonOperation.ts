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
        });
    });
    return inputJSON;
}


function checkIfStockIsAvailable(inputJSON:any,requestBody:any){
    let isStockAvailable = true;
    requestBody.forEach((request:any)=>{
        const data = inputJSON.find((data:any)=>data.id === request.id);
        if(!data || (data && data.quantity < request.quantity))
            isStockAvailable = false;
    });
    return isStockAvailable;

}

function checkStockPrice(inputJSON:any,requestBody:any){
    let price = 0;

    requestBody.forEach((request:any)=>{
        const data = inputJSON.find((data:any)=>data.id === request.id);
        console.log("data: ",data);
        if(data && data.quantity > request.quantity){
            price+= request.quantity*(+data.price)
        }else{
            price =0;
            return 0;
        }
            
    });
    return price;

}



export {
    updateJson,
    checkIfStockIsAvailable,
    checkStockPrice
}