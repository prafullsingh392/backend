import * as apparelController from "./apparel";

export default  function initlizeRouter(app:any){
    app.put("/", apparelController.defaultRoute);
    app.put("/apparel/v1/update-code-size", apparelController.update);
    app.post("/apparel/v1/check-stock", apparelController.checkStock);
    app.post("/apparel/v1/check-price", apparelController.checkPrice);
}
