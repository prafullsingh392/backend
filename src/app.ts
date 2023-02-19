import express from 'express';
import compression from "compression";
import errorHandler from 'errorhandler';
import data from './assets/data.json'
import {createOutputFile} from './utility/file'

const app = express();
import initlizeRouter from "./controllers";


app.use(compression());
app.use(express.json())

if (process.env.NODE_ENV === "development") {
    app.use(errorHandler());
}


initlizeRouter(app);
createOutputFile()


app.listen(process.env.PORT || 3000, () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
});
export default app;


