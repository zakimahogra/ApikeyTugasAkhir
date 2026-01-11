const crypto = require('crypto');
const { ApiUser } = require('../models');

// Generate API Key
const generateApiKey = () => {
    return crypto.randomBytes(32).toString('hex');
};

// Register new API user
const register = async (req, res) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                success: false,
                message: 'Name and email are required.'
            });
        }

        // Check if email already exists
        const existingUser = await ApiUser.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'Email already registered.'
            });
        }

        // Generate API key
        const apiKey = generateApiKey();

        // Create new user
        const user = await ApiUser.create({
            name,
            email,
            api_key: apiKey
        });

        return res.status(201).json({
            success: true,
            message: 'API key generated successfully.',
            data: {
                name: user.name,
                email: user.email,
                api_key: user.api_key
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error registering user.',
            error: error.message
        });
    }
};

// Verify API key
const verify = async (req, res) => {
    try {
        const apiKey = req.headers['x-api-key'];

        if (!apiKey) {
            return res.status(400).json({
                success: false,
                message: 'API key is required in x-api-key header.'
            });
        }

        const user = await ApiUser.findOne({ where: { api_key: apiKey } });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid API key.'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'API key is valid.',
            data: {
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error verifying API key.',
            error: error.message
        });
    }
};

module.exports = {
    register,
    verify
};
