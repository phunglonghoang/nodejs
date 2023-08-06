import express  from "express";
import HomeControler from '../controller/HomeController.js'
let router = express.Router();
const initWebRoute =(app) => {
   
    router.get('/', HomeControler.getHomePage);
       
     
    router.get('/about', (req, res) => {
        res.send("thong tin")
       })
    return app.use('/', router)   
  
}

export default initWebRoute;
