import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient({
	log:[{ level: 'query', emit: 'event'}]
});

prismaClient.$on('query', (e) => console.info(e));

export { prismaClient };