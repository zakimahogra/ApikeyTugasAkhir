const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'UMKM Open API',
            version: '1.0.0',
            description: 'RESTful API untuk Layanan Informasi Produk UMKM',
            contact: {
                name: 'API Support',
                email: 'support@umkmapi.com'
            }
        },
        servers: [
            {
                url: 'http://localhost:5001',
                description: 'Development server'
            }
        ],
        components: {
            securitySchemes: {
                ApiKeyAuth: {
                    type: 'apiKey',
                    in: 'header',
                    name: 'x-api-key',
                    description: 'API Key untuk autentikasi'
                }
            }
        },
        security: [
            {
                ApiKeyAuth: []
            }
        ]
    },
    apis: ['./routes/*.js']
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
