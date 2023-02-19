import path from 'path';
import fs from 'fs';
import {promisify} from "util";

const fileSystem = {
    readdir: promisify(fs.readdir),
    readFile: promisify(fs.readFile),
};


function createOutputFile(){
    let configFilename = outputFilePath();
    let inputFileName = path.join(__dirname,'../assets/data.json')
    if(!fs.existsSync(configFilename)){
        fs.copyFile(inputFileName, configFilename, (err) => {
            if (err) throw err;
            console.log('source.txt was copied to destination.txt');
        });
    }
}


function outputFilePath(){
    return path.join(__dirname, "../../../", "output.json")
}


async function readFileData(){
    let data= await fileSystem.readFile(outputFilePath(), {encoding: 'utf-8'});
    return data ? JSON.parse(data) : Object.create({});
}

function writeInFile(data:any){
    fs.writeFileSync(outputFilePath(), JSON.stringify(data));

}
export {
    createOutputFile,
    outputFilePath,
    readFileData,
    writeInFile
}