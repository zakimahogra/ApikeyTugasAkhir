# UMKM Open API

Website Open API untuk Layanan Informasi Produk UMKM Berbasis RESTful API

## 📋 Deskripsi

Sistem Open API sederhana untuk mengakses informasi produk UMKM di Indonesia dengan arsitektur 3-tier:
- **Frontend**: React + Vite + TailwindCSS
- **Backend**: Node.js + Express + Sequelize
- **Database**: MySQL

## 🚀 Fitur

- ✅ API Key Authentication
- ✅ Rate Limiting
- ✅ Swagger Documentation
- ✅ Filtering & Pagination
- ✅ CORS Support
- ✅ Error Handling

## 📁 Struktur Folder

```
TA/
├── backend/
│   ├── config/
│   │   ├── database.js
│   │   └── swagger.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── productController.js
│   │   └── umkmController.js
│   ├── middlewares/
│   │   └── apiKeyAuth.js
│   ├── models/
│   │   ├── index.js
│   │   ├── ApiUser.js
│   │   ├── Umkm.js
│   │   └── Product.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── products.js
│   │   └── umkm.js
│   ├── seeders/
│   │   └── seed.js
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.js
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Documentation.jsx
│   │   │   └── Products.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
└── README.md
```

## 🛠️ Instalasi

### Prerequisites

- Node.js (v18 atau lebih baru)
- MySQL (v8 atau lebih baru)
- npm atau yarn

### 1. Setup Database

Buat database MySQL:

```sql
CREATE DATABASE umkm_api;
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Konfigurasi file `.env`:

```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=umkm_api
DB_USER=root
DB_PASSWORD=your_password

PORT=5000
NODE_ENV=development
```

Jalankan seeder untuk data sample:

```bash
npm run seed
```

Jalankan server:

```bash
npm run dev
```

Server akan berjalan di `http://localhost:5000`

### 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend akan berjalan di `http://localhost:3000`

## 📚 API Endpoints

### Authentication

| Method | Endpoint | Deskripsi | Auth Required |
|--------|----------|-----------|---------------|
| POST | `/api/auth/register` | Registrasi API key | ❌ |
| GET | `/api/auth/verify` | Verifikasi API key | ✅ |

### Products

| Method | Endpoint | Deskripsi | Auth Required |
|--------|----------|-----------|---------------|
| GET | `/api/products` | Daftar produk | ✅ |
| GET | `/api/products/:id` | Detail produk | ✅ |

### UMKM

| Method | Endpoint | Deskripsi | Auth Required |
|--------|----------|-----------|---------------|
| GET | `/api/umkm` | Daftar UMKM | ✅ |

### Health Check

| Method | Endpoint | Deskripsi | Auth Required |
|--------|----------|-----------|---------------|
| GET | `/health` | Status server | ❌ |

## 🔑 Cara Menggunakan API

### 1. Registrasi API Key

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com"
  }'
```

Response:
```json
{
  "success": true,
  "message": "API key generated successfully.",
  "data": {
    "name": "John Doe",
    "email": "john@example.com",
    "api_key": "your_generated_api_key"
  }
}
```

### 2. Menggunakan API Key

Tambahkan header `x-api-key` pada setiap request:

```bash
curl -X GET http://localhost:5000/api/products \
  -H "x-api-key: your_api_key"
```

### 3. Filter & Pagination

```bash
curl -X GET "http://localhost:5000/api/products?kategori=Makanan&page=1&limit=10" \
  -H "x-api-key: your_api_key"
```

## 📖 Dokumentasi Swagger

Akses dokumentasi interaktif di:
```
http://localhost:5000/api-docs
```

## 🗄️ Database Schema

### Tabel: api_users
- `id` (INT, PK, Auto Increment)
- `name` (VARCHAR)
- `email` (VARCHAR, Unique)
- `api_key` (VARCHAR, Unique)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

### Tabel: umkm
- `id` (INT, PK, Auto Increment)
- `nama_umkm` (VARCHAR)
- `alamat` (TEXT)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

### Tabel: products
- `id` (INT, PK, Auto Increment)
- `umkm_id` (INT, FK → umkm.id)
- `nama_produk` (VARCHAR)
- `kategori` (VARCHAR)
- `harga` (DECIMAL)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

## 🔒 Rate Limiting

- Window: 15 menit
- Max Requests: 100 per IP

## ⚙️ Teknologi

### Backend
- Node.js
- Express.js
- Sequelize ORM
- MySQL2
- Swagger UI Express
- Express Rate Limit
- CORS
- dotenv

### Frontend
- React 18
- Vite
- TailwindCSS
- React Router DOM
- Axios

## 🎯 Fitur Frontend

1. **Landing Page** - Informasi Open API
2. **Registrasi** - Form untuk generate API key
3. **Dokumentasi** - Panduan penggunaan API
4. **Produk** - Tabel data produk dengan filter

## 🐛 Troubleshooting

### Database Connection Error
- Pastikan MySQL sudah berjalan
- Periksa kredensial di file `.env`
- Pastikan database `umkm_api` sudah dibuat

### Port Already in Use
- Backend: Ubah `PORT` di `.env`
- Frontend: Ubah port di `vite.config.js`

### CORS Error
- Pastikan backend sudah berjalan
- Periksa konfigurasi CORS di `server.js`

## 📝 Lisensi

ISC

## 👨‍💻 Developer

Dibuat untuk tugas akhir Pengembangan Website Open API Layanan Informasi Produk UMKM Berbasis RESTful API
