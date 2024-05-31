import swaggerAutogen from 'swagger-autogen';
import doc from './config/swagger.js';

const outputFile = './swagger_documentation.json';
const endpoints = ['./routes/userRoutes.js'];

swaggerAutogen(outputFile, endpoints, doc);
