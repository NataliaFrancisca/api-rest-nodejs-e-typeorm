import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {
    handle(req: Request, res: Response) {
        const createUserService = new CreateUserService();

        const name = req.body.name;
        const email = req.body.email;
        const age = req.body.age;

        if(name.length === 0 || email.length === 0 || age < 0){
            return res.status(400).json({message: 'Digite um valor válido'})
        }

        const user = createUserService.execute({name, email, age})
        return res.status(201).json({message: `Usuário ${name} criado`, data: user})
    }
}

export { CreateUserController }