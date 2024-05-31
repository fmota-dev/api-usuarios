// src/routes/userRoutes.js
import express from 'express';
import userController from '../controllers/userController.js';

import {
	validateCreateUser,
	validateUpdateUser,
} from '../middlewares/userMiddleware.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Usuários
 *   description: Operações relacionadas a usuários
 */

/**
 * @swagger
 * /usuarios:
 *   post:
 *     tags:
 *       - Usuários
 *     description: Endpoint para criar um usuário.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/User'
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Users'
 *       500:
 *         description: Erro ao criar usuário.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 */
router.post('/usuarios', validateCreateUser, userController.createUser);

/**
 * @swagger
 * /usuarios:
 *   get:
 *     tags:
 *       - Usuários
 *     description: Endpoint para buscar todos os usuários.
 *     responses:
 *       200:
 *         description: Lista de usuários.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Users'
 *       500:
 *         description: Erro ao buscar usuários.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 */
router.get('/usuarios', userController.getUsers);

/**
 * @swagger
 * /usuarios/{id}:
 *   get:
 *     tags:
 *       - Usuários
 *     description: Endpoint para buscar um usuário pelo ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do usuário.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuário encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Users'
 *       404:
 *         description: Usuário não encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 *       500:
 *         description: Erro ao buscar usuário.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 */
router.get('/usuarios/:id', userController.getUserById);

/**
 * @swagger
 * /usuarios/{id}:
 *   patch:
 *     tags:
 *       - Usuários
 *     description: Endpoint para atualizar um usuário pelo ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do usuário.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/User'
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/User'
 *       500:
 *         description: Erro ao atualizar usuário.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 */
router.patch('/usuarios/:id', validateUpdateUser, userController.updateUser);

/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     tags:
 *       - Usuários
 *     description: Endpoint para deletar um usuário pelo ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do usuário.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuário deletado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Users'
 *       500:
 *         description: Erro ao deletar usuário.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 */
router.delete('/usuarios/:id', validateUpdateUser, userController.deleteUser);

export default router;
