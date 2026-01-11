function Documentation() {
    const apiKey = localStorage.getItem('apiKey');

    return (
        <div className="min-h-screen py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">Dokumentasi API</h1>
                    <p className="text-gray-600 mb-8">
                        Panduan lengkap untuk menggunakan UMKM Open API
                    </p>

                    {/* Base URL */}
                    <div className="card mb-8">
                        <h2 className="text-2xl font-bold mb-4">Base URL</h2>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <code className="text-primary-600">http://localhost:5001/api</code>
                        </div>
                    </div>

                    {/* Authentication */}
                    <div className="card mb-8">
                        <h2 className="text-2xl font-bold mb-4">Autentikasi</h2>
                        <p className="text-gray-600 mb-4">
                            Semua endpoint (kecuali registrasi) memerlukan API key yang dikirim melalui header:
                        </p>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <code className="text-sm">x-api-key: YOUR_API_KEY</code>
                        </div>
                        {apiKey && (
                            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                                <p className="text-sm text-green-800 mb-2">API Key Anda:</p>
                                <code className="text-sm text-green-900 font-mono">{apiKey}</code>
                            </div>
                        )}
                    </div>

                    {/* Endpoints */}
                    <div className="card mb-8">
                        <h2 className="text-2xl font-bold mb-6">Endpoints</h2>

                        {/* Register */}
                        <div className="mb-8 pb-8 border-b">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded">POST</span>
                                <code className="text-lg">/auth/register</code>
                            </div>
                            <p className="text-gray-600 mb-4">Registrasi untuk mendapatkan API key</p>

                            <h4 className="font-semibold mb-2">Request Body:</h4>
                            <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                <pre className="text-sm overflow-x-auto">{`{
  "name": "John Doe",
  "email": "john@example.com"
}`}</pre>
                            </div>

                            <h4 className="font-semibold mb-2">Response:</h4>
                            <div className="bg-gray-50 rounded-lg p-4">
                                <pre className="text-sm overflow-x-auto">{`{
  "success": true,
  "message": "API key generated successfully.",
  "data": {
    "name": "John Doe",
    "email": "john@example.com",
    "api_key": "abc123..."
  }
}`}</pre>
                            </div>
                        </div>

                        {/* Verify */}
                        <div className="mb-8 pb-8 border-b">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded">GET</span>
                                <code className="text-lg">/auth/verify</code>
                            </div>
                            <p className="text-gray-600 mb-4">Verifikasi API key</p>

                            <h4 className="font-semibold mb-2">Headers:</h4>
                            <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                <code className="text-sm">x-api-key: YOUR_API_KEY</code>
                            </div>

                            <h4 className="font-semibold mb-2">Response:</h4>
                            <div className="bg-gray-50 rounded-lg p-4">
                                <pre className="text-sm overflow-x-auto">{`{
  "success": true,
  "message": "API key is valid.",
  "data": {
    "name": "John Doe",
    "email": "john@example.com"
  }
}`}</pre>
                            </div>
                        </div>

                        {/* Get Products */}
                        <div className="mb-8 pb-8 border-b">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded">GET</span>
                                <code className="text-lg">/products</code>
                            </div>
                            <p className="text-gray-600 mb-4">Mendapatkan daftar produk UMKM</p>

                            <h4 className="font-semibold mb-2">Query Parameters:</h4>
                            <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                <ul className="text-sm space-y-1">
                                    <li><code>kategori</code> (optional) - Filter berdasarkan kategori</li>
                                    <li><code>page</code> (optional) - Nomor halaman (default: 1)</li>
                                    <li><code>limit</code> (optional) - Jumlah data per halaman (default: 10)</li>
                                </ul>
                            </div>

                            <h4 className="font-semibold mb-2">Example:</h4>
                            <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                <code className="text-sm">/products?kategori=Makanan&page=1&limit=10</code>
                            </div>

                            <h4 className="font-semibold mb-2">Response:</h4>
                            <div className="bg-gray-50 rounded-lg p-4">
                                <pre className="text-sm overflow-x-auto">{`{
  "success": true,
  "message": "Products retrieved successfully.",
  "data": {
    "total": 15,
    "page": 1,
    "limit": 10,
    "totalPages": 2,
    "products": [...]
  }
}`}</pre>
                            </div>
                        </div>

                        {/* Get Product by ID */}
                        <div className="mb-8 pb-8 border-b">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded">GET</span>
                                <code className="text-lg">/products/:id</code>
                            </div>
                            <p className="text-gray-600 mb-4">Mendapatkan detail produk berdasarkan ID</p>

                            <h4 className="font-semibold mb-2">Response:</h4>
                            <div className="bg-gray-50 rounded-lg p-4">
                                <pre className="text-sm overflow-x-auto">{`{
  "success": true,
  "message": "Product retrieved successfully.",
  "data": {
    "id": 1,
    "nama_produk": "Nasi Goreng Spesial",
    "kategori": "Makanan",
    "harga": "25000.00",
    "umkm": {
      "id": 1,
      "nama_umkm": "Warung Makan Bu Siti",
      "alamat": "Jl. Merdeka No. 123, Jakarta"
    }
  }
}`}</pre>
                            </div>
                        </div>

                        {/* Get UMKM */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded">GET</span>
                                <code className="text-lg">/umkm</code>
                            </div>
                            <p className="text-gray-600 mb-4">Mendapatkan daftar UMKM beserta produknya</p>

                            <h4 className="font-semibold mb-2">Query Parameters:</h4>
                            <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                <ul className="text-sm space-y-1">
                                    <li><code>page</code> (optional) - Nomor halaman (default: 1)</li>
                                    <li><code>limit</code> (optional) - Jumlah data per halaman (default: 10)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Swagger Link */}
                    <div className="card bg-primary-50 border-2 border-primary-200">
                        <h2 className="text-2xl font-bold mb-4">Swagger UI</h2>
                        <p className="text-gray-700 mb-4">
                            Untuk testing interaktif dan dokumentasi lengkap, kunjungi Swagger UI:
                        </p>
                        <a
                            href="http://localhost:5001/api-docs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary inline-block"
                        >
                            Buka Swagger UI
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Documentation;
