const express = require('express');
const router = express.Router();
const { getAllUmkm } = require('../controllers/umkmController');
const apiKeyAuth = require('../middlewares/apiKeyAuth');

/**
 * @swagger
 * /api/umkm:
 *   get:
 *     summary: Mendapatkan daftar UMKM beserta produknya
 *     tags: [UMKM]
 *     security:
 *       - ApiKeyAuth: []
 *     parameters:
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
 *         description: Daftar UMKM berhasil diambil
 *       401:
 *         description: API key tidak valid
 */
router.get('/', apiKeyAuth, getAllUmkm);

module.exports = router;
