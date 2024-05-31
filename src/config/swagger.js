import User from '../docs/User.js';

let doc = {
	openapi: '3.0.0',
	info: {
		version: '1.0.0',
		title: 'Usuários API',
		description: 'Documentação da API de usuários',
	},

	servers: [
		{
			url: 'https://api-usuarios-seven.vercel.app',
			description: 'Servidor principal',
		},
	],
	tags: [
		{
			name: 'Usuários',
			description: 'Operações relacionadas aos usuários',
		},
	],
	components: {
		securitySchemes: {
			JWT: {
				type: 'apiKey',
				in: 'header',
				name: 'Authorization',
				description: 'JWT token',
			},
		},
		schemas: {
			Usuario: User.Usuario,
		},
	},
};

export default doc;
