import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import docsRoutes from './routes/docsRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static('src/docs'))

// Configurando as rotas

app.get('/', (req, res) => {
	res.send('API de usuários');
});

app.use(userRoutes);
app.use('/docs', docsRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});
