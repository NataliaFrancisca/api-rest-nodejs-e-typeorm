import { Router, Request, Response } from 'express';
import { CreateUserController} from "./controllers/CreateUserController";

const router = Router();
const createUserController = new CreateUserController()

router.get('/', (req: Request, res: Response) => {
    return res.json({message: 'Bem vindo a nossa DIO API' })
})

router.get('/users', createUserController.handle);

export { router }