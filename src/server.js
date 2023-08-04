import express from "express";
import configViewEngine from './configs/viewEngine.js'
import initWebRoute from './route/web.js'
require('dotenv').config();

const app = express();
const port = process.env.PORT||8080;
console.log ('check port', port)
//set up view engine
configViewEngine(app);
//init web route 
initWebRoute(app)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})