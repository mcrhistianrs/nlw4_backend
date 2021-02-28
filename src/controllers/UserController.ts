
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UsersRepository';

class UserController{
    async store(request:Request,response:Response){
        const {name,email} = request.body;

        const userRepository = getCustomRepository(UserRepository);

        const userAlreadExists = await userRepository.findOne({
            email
        });

        if(userAlreadExists){
            return response.status(400).json({
                error: "User already exists!"
            });
        };

        const user = userRepository.create({
            name,
            email
        });
        await userRepository.save(user);

        return response.status(201).json(user);
    }
};
export { UserController };
