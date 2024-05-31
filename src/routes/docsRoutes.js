import swaggerUI from 'swagger-ui-express';
import swaggerFile from '../swagger_documentation.json' assert { type: 'json' };
import express from 'express';

const router = express.Router();

router.use('/', swaggerUI.serve, swaggerUI.setup(swaggerFile));

export default router;