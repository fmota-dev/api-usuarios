// src/models/user.js
import prisma from '../config/prisma.js';

class UserModel {
	static async createUser(data) {
		return prisma.user.create({
			data: {
				name: data.name,
				age: data.age,
				email: data.email,
			},
		});
	}

	static async getUsers() {
		return prisma.user.findMany();
	}

	static async getUserById(id) {
		return prisma.user.findUnique({
			where: {
				id: id,
			},
		});
	}

	static async updateUser(id, data) {
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

	static async deleteUser(id) {
		return prisma.user.delete({
			where: {
				id: id,
			},
		});
	}
}

export default UserModel;
