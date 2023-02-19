"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfStockIsAvailable = exports.updateJson = void 0;
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
        if (!data || (data && data.quantity < request.request))
            isStockAvailable = false;
    });
    return isStockAvailable;
}
exports.checkIfStockIsAvailable = checkIfStockIsAvailable;
