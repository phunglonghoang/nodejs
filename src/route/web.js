import express  from "express";
import HomeController from '../controller/HomeController'
let router = express.Router();
const initWebRoute =(app) => {
   
    router.get('/',HomeController.getHomePage );   
    router.get('/detail/user/:id',HomeController.getDetailPage);
    router.post('/create-new-user', HomeController.createNewUser);
    router.post('/delete-user', HomeController.deleteUser)
    router.get('/edit-user/:id', HomeController.getEditPage);
    router.post('/update-user', HomeController.updateUser)
    router.get('/about', (req, res) => {
        res.send("thong tin")
    })
    return app.use('/', router)   
  
}

export default initWebRoute;
