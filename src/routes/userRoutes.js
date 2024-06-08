import express from "express";
import userController from "../controllers/userController.js";
import {
  validateCreateUser,
  validateUpdateUser,
} from "../middlewares/userMiddleware.js";

const router = express.Router();

/**
 * @openapi
 * /usuarios:
 *   post:
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       400:
 *         description: Solicitação inválida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       500:
 *         description: Erro ao criar usuário
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.post(
  "/usuarios",
  validateCreateUser,
  userController.createUser
  // #swagger.tags = ['Usuários']
  // #swagger.description = 'Endpoint para criar um usuário'
  // #swagger.summary = 'Criar usuário'
);

/**
 * @openapi
 * /usuarios:
 *   get:
 *     tags:
 *       - Usuários
 *     summary: Endpoint para obter todos os usuários
 *     description: Retorna uma lista de todos os usuários registrados
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 *       500:
 *         description: Erro ao buscar usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.get(
  "/usuarios",
  userController.getUsers
  // #swagger.tags = ['Usuários']
  // #swagger.description = 'Endpoint para obter todos os usuários'
  // #swagger.summary = 'Obter usuários'
);

/**
 * @openapi
 * /usuarios/{id}:
 *   get:
 *     tags:
 *       - Usuários
 *     summary: Endpoint para obter um usuário pelo ID
 *     description: Retorna um usuário com base no ID fornecido
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       404:
 *         description: Usuário não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Erro ao buscar usuário
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.get(
  "/usuarios/:id",
  userController.getUserById
  // #swagger.tags = ['Usuários']
  // #swagger.description = 'Endpoint para obter um usuário pelo ID'
  // #swagger.summary = 'Obter usuário pelo ID'
);

/**
 * @openapi
 * /usuarios/{id}:
 *   patch:
 *     tags:
 *       - Usuários
 *     summary: Endpoint para atualizar um usuário pelo ID
 *     description: Atualiza os dados de um usuário com base no ID fornecido
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       400:
 *         description: Solicitação inválida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       500:
 *         description: Erro ao atualizar usuário
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.patch(
  "/usuarios/:id",
  validateUpdateUser,
  userController.updateUser
  // #swagger.tags = ['Usuários']
  // #swagger.description = 'Endpoint para atualizar um usuário pelo ID'
  // #swagger.summary = 'Atualizar usuário pelo ID'
);

/**
 * @openapi
 * /usuarios/{id}:
 *   delete:
 *     tags:
 *       - Usuários
 *     summary: Endpoint para deletar um usuário pelo ID
 *     description: Deleta um usuário com base no ID fornecido
 *     parameters:
 *    - id: id
 *     responses:
 *       200:
 *         description: Usuário deletado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       500:
 *         description: Erro ao deletar usuário
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.delete(
  "/usuarios/:id",
  userController.deleteUser
  // #swagger.tags = ['Usuários']
  // #swagger.description = 'Endpoint para deletar um usuário pelo ID'
  // #swagger.summary = 'Deletar usuário pelo ID'
);

export default router;
