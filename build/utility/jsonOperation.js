"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateJson = void 0;
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
