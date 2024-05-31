// src/routes/userRoutes.js
import express from 'express';
import userController from '../controllers/userController.js';

import {
	validateCreateUser,
	validateUpdateUser,
} from '../middlewares/userMiddleware.js';

const router = express.Router();

router.post(
	'/usuarios',
	validateCreateUser,
	userController.createUser
	// #swagger.tags = ['Usuários']
	// #swagger.description = 'Endpoint para criar um usuário.'
	// #swagger.parameters['newUser'] = {
	//   in: 'body',
	//   description: 'Informações do usuário.',
	//   required: true,
	//   type: 'object',
	//   schema: { $ref: '#/definitions/User' }
	// }
	// #swagger.responses[201] = {
	//   description: 'Usuário criado com sucesso.',
	//   schema: { $ref: '#/definitions/User' }
	// }
	// #swagger.responses[500] = {
	//   schema: { error: 'Erro ao criar usuário'}
	// }
);
router.get(
	'/usuarios',
	validateUpdateUser,
	userController.getUsers
	// #swagger.tags = ['Usuários']
	// #swagger.description = 'Endpoint para buscar todos os usuários.'
	// #swagger.responses[200] = {
	//   description: 'Lista de usuários.',
	//   schema: { $ref: '#/definitions/User' }
	// }
	// #swagger.responses[500] = {
	//   schema: { error: 'Erro ao buscar usuários'}
	// }
);
router.get(
	'/usuarios/:id',
	validateUpdateUser,
	userController.getUserById
	// #swagger.tags = ['Usuários']
	// #swagger.description = 'Endpoint para buscar um usuário pelo ID.'
	// #swagger.parameters['id'] = { description: 'ID do usuário.', required: true }
	// #swagger.responses[200] = {
	//   description: 'Usuário encontrado.',
	//   schema: { $ref: '#/definitions/User' }
	// }
	// #swagger.responses[404] = {
	//   schema: { message: 'Usuário não encontrado'}
	// }
	// #swagger.responses[500] = {
	//   schema: { error: 'Erro ao buscar usuário'}
	// }
);
router.patch(
	'/usuarios/:id',
	validateUpdateUser,
	userController.updateUser
	// #swagger.tags = ['Usuários']
	// #swagger.description = 'Endpoint para atualizar um usuário pelo ID.'
	// #swagger.parameters['id'] = { description: 'ID do usuário.', required: true }
	// #swagger.parameters['updateUser'] = {
	//   in: 'body',
	//   description: 'Informações do usuário.',
	//   required: true,
	//   type: 'object',
	//   schema: { $ref: '#/definitions/User' }
	// }
	// #swagger.responses[201] = {
	//   description: 'Usuário atualizado com sucesso.',
	//   schema: { $ref: '#/definitions/User' }
	// }
	// #swagger.responses[500] = {
	//   schema: { error: 'Erro ao atualizar usuário'}
	// }
);
router.delete(
	'/usuarios/:id',
	validateUpdateUser,
	userController.deleteUser
	// #swagger.tags = ['Usuários']
	// #swagger.description = 'Endpoint para deletar um usuário pelo ID.'
	// #swagger.parameters['id'] = { description: 'ID do usuário.', required: true }
	// #swagger.responses[201] = {
	//   description: 'Usuário deletado com sucesso.',
	//   schema: { $ref: '#/definitions/User' }
	// }
	// #swagger.responses[500] = {
	//   schema: { error: 'Erro ao deletar usuário'}
	// }
);

export default router;
