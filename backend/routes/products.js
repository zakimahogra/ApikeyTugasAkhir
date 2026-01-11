const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById } = require('../controllers/productController');
const apiKeyAuth = require('../middlewares/apiKeyAuth');

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Mendapatkan daftar produk UMKM
 *     tags: [Products]
 *     security:
 *       - ApiKeyAuth: []
 *     parameters:
 *       - in: query
 *         name: kategori
 *         schema:
 *           type: string
 *         description: Filter berdasarkan kategori
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Nomor halaman
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Jumlah data per halaman
 *     responses:
 *       200:
 *         description: Daftar produk berhasil diambil
 *       401:
 *         description: API key tidak valid
 */
router.get('/', apiKeyAuth, getAllProducts);

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Mendapatkan detail produk berdasarkan ID
 *     tags: [Products]
 *     security:
 *       - ApiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID produk
 *     responses:
 *       200:
 *         description: Detail produk berhasil diambil
 *       404:
 *         description: Produk tidak ditemukan
 *       401:
 *         description: API key tidak valid
 */
router.get('/:id', apiKeyAuth, getProductById);

module.exports = router;
