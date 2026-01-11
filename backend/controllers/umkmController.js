const { Umkm, Product } = require('../models');

// Get all UMKM
const getAllUmkm = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const offset = (page - 1) * limit;

        const { count, rows } = await Umkm.findAndCountAll({
            include: [{
                model: Product,
                as: 'products',
                attributes: ['id', 'nama_produk', 'kategori', 'harga']
            }],
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: [['created_at', 'DESC']]
        });

        return res.status(200).json({
            success: true,
            message: 'UMKM retrieved successfully.',
            data: {
                total: count,
                page: parseInt(page),
                limit: parseInt(limit),
                totalPages: Math.ceil(count / limit),
                umkm: rows
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retrieving UMKM.',
            error: error.message
        });
    }
};

module.exports = {
    getAllUmkm
};
