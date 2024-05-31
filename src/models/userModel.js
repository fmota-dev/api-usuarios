// src/models/user.js
import prisma from '../config/prisma.js';

class UserModel {
	async createUser(data) {
		return prisma.user.create({
			data: {
				name: data.name,
				age: data.age,
				email: data.email,
			},
		});
	}

	async getUsers() {
		return prisma.user.findMany();
	}

	async getUserById(id) {
		return prisma.user.findUnique({
			where: {
				id: id,
			},
		});
	}

	async updateUser(id, data) {
		return prisma.user.update({
			where: {
				id: id,
			},
			data: {
				name: data.name,
				age: data.age,
				email: data.email,
			},
		});
	}

	async deleteUser(id) {
		return prisma.user.delete({
			where: {
				id: id,
			},
		});
	}
}

export default UserModel;
