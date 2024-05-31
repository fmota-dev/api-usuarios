import swaggerUI from 'swagger-ui-express';
import swaggerFile from '../swagger_documentation.json' assert { type: 'json' };
import express from 'express';

const router = express.Router();
const CSS_URL =
	' https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css ';

router.use(
	'/',
	swaggerUI.serve,
	swaggerUI.setup(swaggerFile, {
		customCss:
			'.swagger-ui .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }',
		customCssUrl: CSS_URL,
	})
);

export default router;
