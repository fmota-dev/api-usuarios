const Users = {
	Usuario: {
		type: 'object',
		properties: {
			name: { type: 'string', example: 'John Doe' },
			email: { type: 'string', example: 'john.doe@example.com' },
			age: { type: 'integer', example: 30 },
		},
	},
};

export default Users;
