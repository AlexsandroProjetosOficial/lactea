import { IUserDTO } from "./IUserDTO";

interface IUsersRepositoryDTO {
	createUser({ email, name, password }: IUserDTO): Promise<IUserDTO>;
	findUserByEmail(email: string): Promise<IUserDTO>;
};

export { IUsersRepositoryDTO };