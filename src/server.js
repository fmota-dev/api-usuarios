import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());

// Configurando as rotas

app.get('/', (req, res) => {
	res.send('API de usuários');
});

app.use('/usuarios', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});