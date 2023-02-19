"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkStockPrice = exports.checkIfStockIsAvailable = exports.updateJson = void 0;
function updateJson(inputJSON, requestBody) {
    requestBody.forEach(function (request) {
        inputJSON.forEach(function (data) {
            if (data.id === request.id) {
                if (request.code)
                    data.code = request.code;
                if (request.quantity)
                    data.quantity = request.quantity;
                if (request.price)
                    data.price = request.price;
            }
        });
    });
    return inputJSON;
}
exports.updateJson = updateJson;
function checkIfStockIsAvailable(inputJSON, requestBody) {
    var isStockAvailable = true;
    requestBody.forEach(function (request) {
        var data = inputJSON.find(function (data) { return data.id === request.id; });
        if (!data || (data && data.quantity < request.quantity))
            isStockAvailable = false;
    });
    return isStockAvailable;
}
exports.checkIfStockIsAvailable = checkIfStockIsAvailable;
function checkStockPrice(inputJSON, requestBody) {
    var price = 0;
    requestBody.forEach(function (request) {
        var data = inputJSON.find(function (data) { return data.id === request.id; });
        console.log("data: ", data);
        if (data && data.quantity > request.quantity) {
            price += request.quantity * (+data.price);
        }
        else {
            price = 0;
            return 0;
        }
    });
    return price;
}
exports.checkStockPrice = checkStockPrice;
