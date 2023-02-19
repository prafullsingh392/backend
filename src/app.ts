import express from 'express';
import compression from "compression";
import errorHandler from 'errorhandler';
import data from './assets/data.json'
import fs from 'fs';
import path from 'path';

let configFilename = path.join(__dirname, "../../", "output.json");

const app = express();
import initlizeRouter from "./controllers";


app.use(compression());

if (process.env.NODE_ENV === "development") {
    app.use(errorHandler());
}

initlizeRouter(app);

if(!fs.existsSync(configFilename)){
    fs.copyFile(`${__dirname}/assets/data.json`, configFilename, (err) => {
        if (err) throw err;
        console.log('source.txt was copied to destination.txt');
    });
}

app.listen(process.env.PORT || 3000, () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
});
export default app;


