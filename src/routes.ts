import { Router } from 'express';
import { SurveysController } from './controllers/SuverysController';
import { UserController } from './controllers/UserController';

const router = Router();
const userController =  new UserController();
const surveysController = new SurveysController();


router.post("/users" , userController.store);

router.post("/surveys" , surveysController.store);
router.get("/surveys"   ,surveysController.index);

export {router};