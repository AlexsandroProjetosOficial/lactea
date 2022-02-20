import { Router } from "express";
import { CreateUserController } from "modules/accounts/useCases/createUser/CreateUserController";
import { ensureLogging } from "../middleware/ensureLogging";

const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.post('/', ensureLogging, createUserController.handle);

usersRoutes.use(ensureLogging);
usersRoutes.get('/');

export { usersRoutes };