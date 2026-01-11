import { useState, useEffect } from 'react';
import api from '../api/axios';

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [filter, setFilter] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const apiKey = localStorage.getItem('apiKey');

    useEffect(() => {
        if (apiKey) {
            fetchProducts();
        } else {
            setLoading(false);
        }
    }, [page, filter, apiKey]);

    const fetchProducts = async () => {
        setLoading(true);
        setError('');

        try {
            const params = { page, limit: 10 };
            if (filter) params.kategori = filter;

            const response = await api.get('/products', { params });

            if (response.data.success) {
                setProducts(response.data.data.products);
                setTotalPages(response.data.data.totalPages);
            }
        } catch (err) {
            setError(err.message || 'Gagal memuat data produk');
        } finally {
            setLoading(false);
        }
    };

    const formatRupiah = (amount) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(amount);
    };

    if (!apiKey) {
        return (
            <div className="min-h-screen py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="card">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold mb-4">API Key Diperlukan</h2>
                            <p className="text-gray-600 mb-6">
                                Anda memerlukan API key untuk mengakses data produk. Silakan daftar terlebih dahulu.
                            </p>
                            <a href="/register" className="btn-primary inline-block">
                                Daftar API Key
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8">Daftar Produk UMKM</h1>

                    {/* Filter */}
                    <div className="card mb-8">
                        <div className="flex flex-wrap gap-4 items-center">
                            <label className="font-medium">Filter Kategori:</label>
                            <select
                                value={filter}
                                onChange={(e) => {
                                    setFilter(e.target.value);
                                    setPage(1);
                                }}
                                className="input-field max-w-xs"
                            >
                                <option value="">Semua Kategori</option>
                                <option value="Makanan">Makanan</option>
                                <option value="Minuman">Minuman</option>
                                <option value="Kue">Kue</option>
                                <option value="Kerajinan">Kerajinan</option>
                                <option value="Fashion">Fashion</option>
                            </select>
                            <button
                                onClick={fetchProducts}
                                className="btn-secondary"
                            >
                                Refresh
                            </button>
                        </div>
                    </div>

                    {/* Loading State */}
                    {loading && (
                        <div className="text-center py-12">
                            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
                            <p className="mt-4 text-gray-600">Memuat data...</p>
                        </div>
                    )}

                    {/* Error State */}
                    {error && (
                        <div className="card bg-red-50 border-2 border-red-200">
                            <p className="text-red-600">{error}</p>
                        </div>
                    )}

                    {/* Products Table */}
                    {!loading && !error && products.length > 0 && (
                        <>
                            <div className="card overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b-2 border-gray-200">
                                            <th className="text-left py-3 px-4">ID</th>
                                            <th className="text-left py-3 px-4">Nama Produk</th>
                                            <th className="text-left py-3 px-4">Kategori</th>
                                            <th className="text-left py-3 px-4">Harga</th>
                                            <th className="text-left py-3 px-4">UMKM</th>
                                            <th className="text-left py-3 px-4">Alamat</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((product) => (
                                            <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                                                <td className="py-3 px-4">{product.id}</td>
                                                <td className="py-3 px-4 font-medium">{product.nama_produk}</td>
                                                <td className="py-3 px-4">
                                                    <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded">
                                                        {product.kategori}
                                                    </span>
                                                </td>
                                                <td className="py-3 px-4 font-semibold text-green-600">
                                                    {formatRupiah(product.harga)}
                                                </td>
                                                <td className="py-3 px-4">{product.umkm?.nama_umkm}</td>
                                                <td className="py-3 px-4 text-sm text-gray-600">{product.umkm?.alamat}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="flex justify-center gap-2 mt-6">
                                    <button
                                        onClick={() => setPage(p => Math.max(1, p - 1))}
                                        disabled={page === 1}
                                        className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Sebelumnya
                                    </button>
                                    <span className="flex items-center px-4 text-gray-700">
                                        Halaman {page} dari {totalPages}
                                    </span>
                                    <button
                                        onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                                        disabled={page === totalPages}
                                        className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Selanjutnya
                                    </button>
                                </div>
                            )}
                        </>
                    )}

                    {/* Empty State */}
                    {!loading && !error && products.length === 0 && (
                        <div className="card text-center py-12">
                            <p className="text-gray-600">Tidak ada produk ditemukan</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Products;
