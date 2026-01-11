const { Product, Umkm } = require('../models');
const { Op } = require('sequelize');

// Get all products with filtering and pagination
const getAllProducts = async (req, res) => {
    try {
        const { kategori, page = 1, limit = 10 } = req.query;
        const offset = (page - 1) * limit;

        const whereClause = {};
        if (kategori) {
            whereClause.kategori = kategori;
        }

        const { count, rows } = await Product.findAndCountAll({
            where: whereClause,
            include: [{
                model: Umkm,
                as: 'umkm',
                attributes: ['id', 'nama_umkm', 'alamat']
            }],
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: [['created_at', 'DESC']]
        });

        return res.status(200).json({
            success: true,
            message: 'Products retrieved successfully.',
            data: {
                total: count,
                page: parseInt(page),
                limit: parseInt(limit),
                totalPages: Math.ceil(count / limit),
                products: rows
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retrieving products.',
            error: error.message
        });
    }
};

// Get product by ID
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByPk(id, {
            include: [{
                model: Umkm,
                as: 'umkm',
                attributes: ['id', 'nama_umkm', 'alamat']
            }]
        });

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found.'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Product retrieved successfully.',
            data: product
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retrieving product.',
            error: error.message
        });
    }
};

module.exports = {
    getAllProducts,
    getProductById
};
