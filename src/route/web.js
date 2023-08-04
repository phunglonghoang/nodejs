import express  from "express";

let router = express.Router();
const initWebRoute =(app) => {
    router.get('/', (req, res) => {
        res.render('index.ejs')
       })
       router.get('/about', (req, res) => {
        res.send("con me may")
       })
    return app.use('/', router)   
  
}

export default initWebRoute;
