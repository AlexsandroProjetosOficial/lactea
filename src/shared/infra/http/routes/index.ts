import { Router } from "express";
import { authenticatesRoutes } from "./authenticates.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use('/users', usersRoutes);
router.use('/authenticates', authenticatesRoutes);

export { router };