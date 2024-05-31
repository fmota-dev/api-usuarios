// src/controllers/userController.js
import UserModel from '../models/userModel.js';


class UserController {
	createUser = async (req, res) => {
		try {
			await UserModel.createUser(req.body);
			res.status(201).json({ message: 'Usuário criado com sucesso!' });
		} catch (error) {
			res.status(500).json({ error: 'Erro ao criar usuário' });
		}
	};

	getUsers = async (req, res) => {
		try {
			const users = await UserModel.getUsers();
			res.json(users);
		} catch (error) {
			res.status(500).json({ error: 'Erro ao buscar usuários' });
		}
	};

	getUserById = async (req, res) => {
		try {
			const user = await UserModel.getUserById(req.params.id);
			if (!user) {
				return res.status(404).json({ message: 'Usuário não encontrado' });
			}
			res.json(user);
		} catch (error) {
			res.status(500).json({ error: 'Erro ao buscar usuário' });
		}
	};

	updateUser = async (req, res) => {
		try {
			await UserModel.updateUser(req.params.id, req.body);
			res.status(201).json({ message: 'Usuário atualizado com sucesso!' });
		} catch (error) {
			res.status(500).json({ error: 'Erro ao atualizar usuário' });
		}
	};

	deleteUser = async (req, res) => {
		try {
			await UserModel.deleteUser(req.params.id);
			res.status(201).json({ message: 'Usuário deletado com sucesso!' });
		} catch (error) {
			res.status(500).json({ error: 'Erro ao deletar usuário' });
		}
	};
}

export default new UserController();
