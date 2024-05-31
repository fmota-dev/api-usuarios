import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import docsRoutes from './routes/docsRoutes.js';

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static('public/docs'));

// Configurando as rotas

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/docs/index.html'));
});

app.use(userRoutes);
app.use('/docs', docsRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});
