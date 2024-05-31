// src/models/userModel.js
import prisma from '../config/prisma.js';

class UserModel {
	async createUser(data) {
		try {
			return await prisma.user.create({
				data: {
					name: data.name,
					age: data.age,
					email: data.email,
				},
			});
		} catch (error) {
			console.error('Erro ao criar usuário no Prisma:', error);
			throw error;
		}
	}

	async getUsers() {
		try {
			return await prisma.user.findMany();
		} catch (error) {
			console.error('Erro ao buscar usuários no Prisma:', error);
			throw error;
		}
	}

	async getUserById(id) {
		try {
			return await prisma.user.findUnique({
				where: { id: Number(id) },
			});
		} catch (error) {
			console.error('Erro ao buscar usuário por ID no Prisma:', error);
			throw error;
		}
	}

	async updateUser(id, data) {
		try {
			return await prisma.user.update({
				where: { id: Number(id) },
				data: data,
			});
		} catch (error) {
			console.error('Erro ao atualizar usuário no Prisma:', error);
			throw error;
		}
	}

	async deleteUser(id) {
		try {
			return await prisma.user.delete({
				where: {
					id: id,
				},
			});
		} catch (error) {
			console.error('Erro ao deletar usuário no Prisma:', error);
			throw error;
		}
	}
}

export default new UserModel();
