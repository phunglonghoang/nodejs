import express from "express";
import configViewEngine from './configs/viewEngine.js';
import initWebRoute from './route/web.js';
// import connection from './configs/connectDB'
require('dotenv').config();

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
const port = process.env.PORT||8080;
console.log ('check port', port)
//set up view engine
configViewEngine(app);
//init web route 
initWebRoute(app)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})