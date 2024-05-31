// src/routes/userRoutes.js
import express from 'express';
import userController from '../controllers/userController.js';

import {
	validateCreateUser,
	validateUpdateUser,
} from '../middlewares/userMiddleware.js';

const router = express.Router();

/* #swagger.tags = ['Usuários']
   #swagger.description = 'Endpoint para criar um usuário.'
   #swagger.parameters['newUser'] = {
       in: 'body',
       description: 'Informações do usuário.',
       required: true,
       type: 'object',
       schema: { $ref: '#/definitions/User' }
   }
   #swagger.responses[201] = {
       description: 'Usuário criado com sucesso.',
       schema: { $ref: '#/definitions/Users' }
   }
   #swagger.responses[500] = {
       schema: { error: 'Erro ao criar usuário' }
   }
*/
router.post('/usuarios', validateCreateUser, userController.createUser);

/* #swagger.tags = ['Usuários']
   #swagger.description = 'Endpoint para buscar todos os usuários.'
   #swagger.responses[200] = {
       description: 'Lista de usuários.',
       schema: { $ref: '#/definitions/Users' }
   }
   #swagger.responses[500] = {
       schema: { error: 'Erro ao buscar usuários' }
   }
*/
router.get('/usuarios', userController.getUsers);

/* #swagger.tags = ['Usuários']
   #swagger.description = 'Endpoint para buscar um usuário pelo ID.'
   #swagger.parameters['id'] = { 
       description: 'ID do usuário.', 
       required: true 
   }
   #swagger.responses[200] = {
       description: 'Usuário encontrado.',
       schema: { $ref: '#/definitions/Users' }
   }
   #swagger.responses[404] = {
       schema: { message: 'Usuário não encontrado' }
   }
   #swagger.responses[500] = {
       schema: { error: 'Erro ao buscar usuário' }
   }
*/
router.get('/usuarios/:id', userController.getUserById);

/* #swagger.tags = ['Usuários']
   #swagger.description = 'Endpoint para atualizar um usuário pelo ID.'
   #swagger.parameters['id'] = { 
       description: 'ID do usuário.', 
       required: true 
   }
   #swagger.parameters['updateUser'] = {
       in: 'body',
       description: 'Informações do usuário.',
       required: true,
       type: 'object',
       schema: { $ref: '#/definitions/Users' }
   }
   #swagger.responses[200] = {
       description: 'Usuário atualizado com sucesso.',
       schema: { $ref: '#/definitions/User' }
   }
   #swagger.responses[500] = {
       schema: { error: 'Erro ao atualizar usuário' }
   }
*/
router.patch('/usuarios/:id', validateUpdateUser, userController.updateUser);

/* #swagger.tags = ['Usuários']
   #swagger.description = 'Endpoint para deletar um usuário pelo ID.'
   #swagger.parameters['id'] = { 
       description: 'ID do usuário.', 
       required: true 
   }
   #swagger.responses[200] = {
       description: 'Usuário deletado com sucesso.',
       schema: { $ref: '#/definitions/Users' }
   }
   #swagger.responses[500] = {
       schema: { error: 'Erro ao deletar usuário' }
   }
*/
router.delete('/usuarios/:id', validateUpdateUser, userController.deleteUser);

export default router;
