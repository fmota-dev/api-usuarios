//importar autogen com openapi 3.0
import doc from './config/swagger.js';
import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger_documentation.json';
const endpoints = ['./routes/userRoutes.js'];

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpoints, doc);
