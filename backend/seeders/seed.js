const { sequelize, Umkm, Product, syncDatabase } = require('../models');
require('dotenv').config();

const seedData = async () => {
    try {
        console.log('🌱 Starting database seeding...');

        // Sync database
        await syncDatabase();

        // Clear existing data
        await Product.destroy({ where: {} });
        await Umkm.destroy({ where: {} });

        // Seed UMKM
        const umkmData = [
            { nama_umkm: 'Warung Makan Bu Siti', alamat: 'Jl. Merdeka No. 123, Jakarta' },
            { nama_umkm: 'Toko Kue Manis', alamat: 'Jl. Sudirman No. 45, Bandung' },
            { nama_umkm: 'Kerajinan Tangan Bali', alamat: 'Jl. Raya Ubud No. 78, Bali' },
            { nama_umkm: 'Batik Nusantara', alamat: 'Jl. Malioboro No. 56, Yogyakarta' },
            { nama_umkm: 'Kopi Lokal Indonesia', alamat: 'Jl. Asia Afrika No. 89, Surabaya' }
        ];

        const umkmRecords = await Umkm.bulkCreate(umkmData);
        console.log(`✅ Created ${umkmRecords.length} UMKM records`);

        // Seed Products
        const productData = [
            // Warung Makan Bu Siti
            { umkm_id: umkmRecords[0].id, nama_produk: 'Nasi Goreng Spesial', kategori: 'Makanan', harga: 25000 },
            { umkm_id: umkmRecords[0].id, nama_produk: 'Ayam Bakar', kategori: 'Makanan', harga: 30000 },
            { umkm_id: umkmRecords[0].id, nama_produk: 'Es Teh Manis', kategori: 'Minuman', harga: 5000 },

            // Toko Kue Manis
            { umkm_id: umkmRecords[1].id, nama_produk: 'Kue Lapis Legit', kategori: 'Kue', harga: 150000 },
            { umkm_id: umkmRecords[1].id, nama_produk: 'Brownies Coklat', kategori: 'Kue', harga: 45000 },
            { umkm_id: umkmRecords[1].id, nama_produk: 'Nastar Premium', kategori: 'Kue', harga: 75000 },

            // Kerajinan Tangan Bali
            { umkm_id: umkmRecords[2].id, nama_produk: 'Patung Kayu Jati', kategori: 'Kerajinan', harga: 500000 },
            { umkm_id: umkmRecords[2].id, nama_produk: 'Tas Anyaman Rotan', kategori: 'Kerajinan', harga: 125000 },
            { umkm_id: umkmRecords[2].id, nama_produk: 'Hiasan Dinding Bambu', kategori: 'Kerajinan', harga: 85000 },

            // Batik Nusantara
            { umkm_id: umkmRecords[3].id, nama_produk: 'Batik Tulis Premium', kategori: 'Fashion', harga: 750000 },
            { umkm_id: umkmRecords[3].id, nama_produk: 'Batik Cap Modern', kategori: 'Fashion', harga: 350000 },
            { umkm_id: umkmRecords[3].id, nama_produk: 'Selendang Batik', kategori: 'Fashion', harga: 125000 },

            // Kopi Lokal Indonesia
            { umkm_id: umkmRecords[4].id, nama_produk: 'Kopi Arabika Gayo', kategori: 'Minuman', harga: 85000 },
            { umkm_id: umkmRecords[4].id, nama_produk: 'Kopi Robusta Lampung', kategori: 'Minuman', harga: 65000 },
            { umkm_id: umkmRecords[4].id, nama_produk: 'Kopi Luwak Premium', kategori: 'Minuman', harga: 450000 }
        ];

        const productRecords = await Product.bulkCreate(productData);
        console.log(`✅ Created ${productRecords.length} product records`);

        console.log('🎉 Database seeding completed successfully!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error.message);
        process.exit(1);
    }
};

seedData();
