import { prismaClient } from "../../../prisma";
import { IUserDTO } from "../dtos/user/IUserDTO";
import { IUsersRepositoryDTO } from "../dtos/user/IUsersRepositoryDTO";

class UsersRepository implements IUsersRepositoryDTO {
	async createUser({ email, name, password }: IUserDTO): Promise<IUserDTO> {
		const user = await prismaClient.user.create({
			data: {
				email,
				name,
				password
			}
		});

		return user;
	};

	async findUserByEmail(email: string): Promise<IUserDTO> {
		const user = await prismaClient.user.findFirst({
			where: {
				email: email
			}
		});

		return user;
	}
};

export { UsersRepository };