// src/routes/userRoutes.js
import express from 'express';
import userController from '../controllers/userController.js';
import { validateCreateUser, validateUpdateUser } from '../middlewares/userMiddleware.js';

const router = express.Router();

router.post('/', validateCreateUser, userController.createUser);
router.get('/', validateUpdateUser, userController.getUsers);
router.get('/:id', validateUpdateUser, userController.getUserById);
router.patch('/:id', validateUpdateUser, userController.updateUser);
router.delete('/:id', validateUpdateUser, userController.deleteUser);

export default router;
