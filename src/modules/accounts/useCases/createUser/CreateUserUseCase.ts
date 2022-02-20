import { inject, injectable } from "tsyringe";
import { hash } from 'bcrypt'
import { AppError } from "@shared/errors/AppError";
import { IUserDTO } from "@modules/accounts/dtos/user/IUserDTO";
import { IUsersRepositoryDTO } from "@modules/accounts/dtos/user/IUsersRepositoryDTO";

@injectable()
class CreateUserUseCase {
	constructor(
		@inject('UsersRepository')
		private usersRepository: IUsersRepositoryDTO 
	) { }

	async execute({ name, email, password }: IUserDTO): Promise<IUserDTO> {
		const userAlreadyExist = await this.usersRepository.findUserByEmail(email);

		if(userAlreadyExist) {
			throw new AppError("User already exist.");
		}

		const passwordHash = await hash(password, 8);

		const user = await this.usersRepository.createUser({ name, email, password: passwordHash });
		console.log(user);

		if(!user) {
			throw new AppError(`User un-registered.`);
		}

		return user;
	}
}

export { CreateUserUseCase };