import { IUsersRepositoryDTO } from "modules/accounts/dtos/user/IUsersRepositoryDTO";
import { UsersRepository } from "modules/accounts/repositories/UsersRepository";
import { container } from "tsyringe";

container.registerSingleton<IUsersRepositoryDTO>('UsersRepository', UsersRepository);