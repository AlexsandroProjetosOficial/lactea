interface IUserDTO {
	id?: string;
    name: string;
    password: string;
    email: string;
    createdAt?: Date;
};

export { IUserDTO };