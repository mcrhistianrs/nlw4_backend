import { Router } from 'express';
import { SendMailController } from './controllers/SendMailController';
import { SurveysController } from './controllers/SuverysController';
import { UserController } from './controllers/UserController';

const router = Router();
const userController =  new UserController();
const surveysController = new SurveysController();
const sendMailController = new SendMailController(); 

router.post("/users" , userController.store);

router.post("/surveys" , surveysController.store);
router.get("/surveys"   ,surveysController.index);

router.post("/sendMail"  ,sendMailController.execute)

export {router};