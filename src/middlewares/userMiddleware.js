// src/middleware.js

const validateCreateUser = (req, res, next) => {
	const { name, email, age } = req.body;

	if (typeof name !== 'string' || name.trim() === '') {
		return res.status(400).json({ error: 'Nome inválido' });
	}

	if (typeof email !== 'string' || !/\S+@\S+\.\S+/.test(email)) {
		return res.status(400).json({ error: 'Email inválido' });
	}

	if (typeof age !== 'number' || age < 0) {
		return res.status(400).json({ error: 'Idade inválida' });
	}

	next();
};

const validateUpdateUser = (req, res, next) => {
	const { name, email, age } = req.body;

	if (name && (typeof name !== 'string' || name.trim() === '')) {
		return res.status(400).json({ error: 'Nome inválido' });
	}

	if (email && (typeof email !== 'string' || !/\S+@\S+\.\S+/.test(email))) {
		return res.status(400).json({ error: 'Email inválido' });
	}

	if (age && (typeof age !== 'number' || age < 0)) {
		return res.status(400).json({ error: 'Idade inválida' });
	}

	next();
};

export { validateCreateUser, validateUpdateUser };
