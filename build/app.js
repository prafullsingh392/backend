"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var compression_1 = __importDefault(require("compression"));
var errorhandler_1 = __importDefault(require("errorhandler"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var configFilename = path_1.default.join(__dirname, "../../", "output.json");
var app = (0, express_1.default)();
var controllers_1 = __importDefault(require("./controllers"));
app.use((0, compression_1.default)());
if (process.env.NODE_ENV === "development") {
    app.use((0, errorhandler_1.default)());
}
(0, controllers_1.default)(app);
if (!fs_1.default.existsSync(configFilename)) {
    fs_1.default.copyFile("".concat(__dirname, "/assets/data.json"), configFilename, function (err) {
        if (err)
            throw err;
        console.log('source.txt was copied to destination.txt');
    });
}
app.listen(process.env.PORT || 3000, function () {
    console.log("  App is running at http://localhost:%d in %s mode", app.get("port"), app.get("env"));
    console.log("  Press CTRL-C to stop\n");
});
exports.default = app;
