"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeJson = exports.updateJson = void 0;
function updateJson(inputJSON, requestBody) {
    inputJSON.forEach(function (data) {
        if (data.id === requestBody.id) {
            if (requestBody.code)
                data['code'] = requestBody.code;
            if (requestBody.quantity)
                data.quantity = data.quantity + requestBody.quantity;
            if (requestBody.price)
                data.price = requestBody.price;
        }
    });
    return inputJSON;
}
exports.updateJson = updateJson;
function removeJson(inputJSON, requestBody) {
    inputJSON.forEach(function (data) {
        if (data.id === requestBody.id) {
            if (requestBody.code)
                data['code'] = requestBody.code;
            if (requestBody.quantity && data.quantity > requestBody.quantity)
                data.quantity = data.quantity - requestBody.quantity;
            if (requestBody.price)
                data.price = requestBody.price;
        }
    });
    return inputJSON;
}
exports.removeJson = removeJson;
