const express = require('express');
const router = express.Router();
const { register, verify } = require('../controllers/authController');

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register untuk mendapatkan API key
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 example: john@example.com
 *     responses:
 *       201:
 *         description: API key berhasil dibuat
 *       400:
 *         description: Data tidak valid atau email sudah terdaftar
 */
router.post('/register', register);

/**
 * @swagger
 * /api/auth/verify:
 *   get:
 *     summary: Verifikasi API key
 *     tags: [Authentication]
 *     security:
 *       - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: API key valid
 *       401:
 *         description: API key tidak valid
 */
router.get('/verify', verify);

module.exports = router;
