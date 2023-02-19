import path from 'path';
import fs from 'fs';



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


export {
    createOutputFile,
    outputFilePath
}