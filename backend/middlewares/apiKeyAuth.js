const { ApiUser } = require('../models');

const apiKeyAuth = async (req, res, next) => {
    try {
        const apiKey = req.headers['x-api-key'];

        if (!apiKey) {
            return res.status(401).json({
                success: false,
                message: 'API key is required. Please provide x-api-key in headers.'
            });
        }

        const user = await ApiUser.findOne({ where: { api_key: apiKey } });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid API key.'
            });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error validating API key.',
            error: error.message
        });
    }
};

module.exports = apiKeyAuth;
