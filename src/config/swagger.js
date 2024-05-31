import Users from '../../public/docs/Users.js';

let doc = {
	info: {
		version: '1.0.0',
		title: 'Usuarios API',
		description: 'Documentação da API de usuários',
	},
	host: 'api-usuarios-seven.vercel.app',
	schemes: ['https'],
	consumes: ['application/json'],
	produces: ['application/json'],
	securityDefinitions: {
		JWT: {
			description: 'JWT token',
			type: 'apiKey',
			in: 'header',
			name: 'Authorization',
		},
	},
	definitions: {
		Users,
	},
};

export default doc;
