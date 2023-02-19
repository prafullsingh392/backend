"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOutputFile = void 0;
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
function createOutputFile() {
    var configFilename = path_1.default.join(__dirname, "../../../", "output.json");
    var inputFileName = path_1.default.join(__dirname, '../assets/data.json');
    if (!fs_1.default.existsSync(configFilename)) {
        fs_1.default.copyFile(inputFileName, configFilename, function (err) {
            if (err)
                throw err;
            console.log('source.txt was copied to destination.txt');
        });
    }
}
exports.createOutputFile = createOutputFile;
