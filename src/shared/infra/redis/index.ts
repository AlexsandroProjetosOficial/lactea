import { Tedis } from "tedis";

const redisClient = new Tedis({
    host: process.env.REDIS_HOST,
	port: Number(process.env.REDIS_PORT),
	password: process.env.REDIS_PASSWORD
});

export { redisClient };