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

        const surveyAlreadyExists = await surveyRepository.findOne({id:survey_id});

        

        if(!surveyAlreadyExists){
            return response.status(400).json({
                error : "Survey does not exists"
            });
        };

        

        const surveyUser  = surveyUserRepository.create({
            user_id: userAlreadyExists.id,
            survey_id 
        });

        

        await surveyUserRepository.save(surveyUser);

        return response.json(surveyUser)


    }
}

export { SendMailController}