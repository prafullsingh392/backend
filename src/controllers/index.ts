import * as apparelController from "./apparel";

export default  function initlizeRouter(app:any){
    app.put("/apparel/v1/update-code-size", apparelController.updateCodeNSize);
    app.put("/apparel/v1/update-quantity", apparelController.updateQuantity);
    app.post("/apparel/v1/check-stock", apparelController.checkStock);
    app.post("/apparel/v1/check-price", apparelController.checkPrice);
}
