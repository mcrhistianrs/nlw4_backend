import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";
import { SurveyUsersRepository } from "../repositories/SurveyUsersRepository";
import { UserRepository } from "../repositories/UsersRepository";

class SendMailController{

    async execute(request: Request , response:Response){
        const {email,survey_id} = request.body;
        
        const userRepostitory = getCustomRepository(UserRepository);
        const surveyRepository = getCustomRepository(SurveysRepository);
        const surveyUserRepository = getCustomRepository(SurveyUsersRepository);

        const userAlreadyExists = await userRepostitory.findOne({email});

        if(!userAlreadyExists){
            return response.status(400).json({
                error: "User does not exists"
            })
        };
    }
}

export { SendMailController}