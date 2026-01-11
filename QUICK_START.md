# 🚀 Panduan Menjalankan UMKM Open API

## Langkah 1: Setup Database MySQL

### Opsi A: Menggunakan MySQL Command Line
```bash
mysql -u root -p < backend/setup-database.sql
```

### Opsi B: Menggunakan MySQL Workbench atau phpMyAdmin
1. Buka MySQL Workbench atau phpMyAdmin
2. Jalankan query berikut:
```sql
CREATE DATABASE IF NOT EXISTS umkm_api;
```

## Langkah 2: Konfigurasi Backend

1. Buka file `backend/.env`
2. Sesuaikan konfigurasi database Anda:
```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=umkm_api
DB_USER=root
DB_PASSWORD=your_mysql_password_here
```

## Langkah 3: Jalankan Database Seeder

Buka terminal di folder `backend` dan jalankan:
```bash
cd backend
powershell -ExecutionPolicy Bypass -Command "npm run seed"
```

Anda akan melihat output:
```
🌱 Starting database seeding...
✅ Created 5 UMKM records
✅ Created 15 product records
🎉 Database seeding completed successfully!
```

## Langkah 4: Jalankan Backend Server

Di terminal yang sama (folder `backend`):
```bash
powershell -ExecutionPolicy Bypass -Command "npm run dev"
```

Server akan berjalan di: `http://localhost:5000`
Swagger UI: `http://localhost:5000/api-docs`

## Langkah 5: Jalankan Frontend

Buka terminal BARU di folder `frontend`:
```bash
cd frontend
powershell -ExecutionPolicy Bypass -Command "npm run dev"
```

Frontend akan berjalan di: `http://localhost:3000`

## ✅ Verifikasi

1. **Backend Health Check**: Buka `http://localhost:5000/health`
2. **Swagger UI**: Buka `http://localhost:5000/api-docs`
3. **Frontend**: Buka `http://localhost:3000`

## 🎯 Testing Flow

1. Buka `http://localhost:3000`
2. Klik "Daftar API Key"
3. Isi form registrasi
4. Salin API key yang digenerate
5. Klik "Lihat Dokumentasi" untuk melihat cara penggunaan
6. Klik "Produk" untuk melihat data produk UMKM

## 🔧 Troubleshooting

### Error: Cannot connect to database
- Pastikan MySQL sudah berjalan
- Periksa kredensial di file `.env`
- Pastikan database `umkm_api` sudah dibuat

### Error: Port already in use
- Backend: Ubah `PORT` di `.env`
- Frontend: Ubah port di `vite.config.js`

### Error: npm command not found
- Gunakan: `powershell -ExecutionPolicy Bypass -Command "npm ..."`

## 📝 Catatan Penting

- Pastikan MySQL sudah terinstall dan berjalan
- Pastikan Node.js versi 18 atau lebih baru
- Jalankan backend terlebih dahulu sebelum frontend
- Jangan tutup terminal saat server berjalan
