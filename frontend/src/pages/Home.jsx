import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-5xl font-bold mb-6">
                            UMKM Open API
                        </h1>
                        <p className="text-xl mb-8 text-primary-100">
                            Layanan Informasi Produk UMKM Berbasis RESTful API
                        </p>
                        <p className="text-lg mb-10 text-primary-50">
                            Akses data produk UMKM di Indonesia dengan mudah melalui API yang sederhana dan stabil
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Link to="/register" className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-colors">
                                Dapatkan API Key
                            </Link>
                            <Link to="/documentation" className="bg-primary-700 hover:bg-primary-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors border-2 border-white">
                                Lihat Dokumentasi
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Fitur Utama</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="card text-center">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">API Key Authentication</h3>
                            <p className="text-gray-600">Sistem autentikasi sederhana menggunakan API key untuk keamanan akses data</p>
                        </div>

                        <div className="card text-center">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Dokumentasi Lengkap</h3>
                            <p className="text-gray-600">Swagger UI interaktif untuk memudahkan testing dan integrasi API</p>
                        </div>

                        <div className="card text-center">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Performa Tinggi</h3>
                            <p className="text-gray-600">Rate limiting dan caching untuk memastikan stabilitas dan kecepatan akses</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Endpoints Preview */}
            <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Endpoint Tersedia</h2>
                    <div className="max-w-3xl mx-auto space-y-4">
                        <div className="card flex items-center justify-between">
                            <div>
                                <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded mr-3">GET</span>
                                <code className="text-gray-700">/api/products</code>
                            </div>
                            <span className="text-gray-500 text-sm">Daftar produk UMKM</span>
                        </div>
                        <div className="card flex items-center justify-between">
                            <div>
                                <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded mr-3">GET</span>
                                <code className="text-gray-700">/api/products/:id</code>
                            </div>
                            <span className="text-gray-500 text-sm">Detail produk</span>
                        </div>
                        <div className="card flex items-center justify-between">
                            <div>
                                <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded mr-3">GET</span>
                                <code className="text-gray-700">/api/umkm</code>
                            </div>
                            <span className="text-gray-500 text-sm">Daftar UMKM</span>
                        </div>
                        <div className="card flex items-center justify-between">
                            <div>
                                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded mr-3">POST</span>
                                <code className="text-gray-700">/api/auth/register</code>
                            </div>
                            <span className="text-gray-500 text-sm">Registrasi API key</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-16 bg-primary-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Siap Memulai?</h2>
                    <p className="text-xl mb-8 text-primary-100">Dapatkan API key Anda sekarang dan mulai integrasi</p>
                    <Link to="/register" className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-colors inline-block">
                        Daftar Sekarang
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
