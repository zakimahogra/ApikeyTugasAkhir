import { useState } from 'react';
import api from '../api/axios';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [apiKey, setApiKey] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await api.post('/auth/register', formData);

            if (response.data.success) {
                setApiKey(response.data.data.api_key);
                localStorage.setItem('apiKey', response.data.data.api_key);
                setFormData({ name: '', email: '' });
            }
        } catch (err) {
            setError(err.message || 'Terjadi kesalahan saat registrasi');
        } finally {
            setLoading(false);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(apiKey);
        alert('API Key berhasil disalin!');
    };

    return (
        <div className="min-h-screen py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-4">Registrasi API Key</h1>
                    <p className="text-center text-gray-600 mb-8">
                        Dapatkan API key gratis untuk mengakses data produk UMKM
                    </p>

                    {!apiKey ? (
                        <div className="card">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="input-field"
                                        placeholder="Masukkan nama lengkap"
                                        required
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="input-field"
                                        placeholder="nama@email.com"
                                        required
                                    />
                                </div>

                                {error && (
                                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                                        <p className="text-red-600 text-sm">{error}</p>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? 'Memproses...' : 'Dapatkan API Key'}
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div className="card">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">Registrasi Berhasil!</h2>
                                <p className="text-gray-600">API key Anda telah dibuat. Simpan dengan aman.</p>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4 mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    API Key Anda
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={apiKey}
                                        readOnly
                                        className="input-field font-mono text-sm flex-1"
                                    />
                                    <button
                                        onClick={copyToClipboard}
                                        className="btn-secondary whitespace-nowrap"
                                    >
                                        Salin
                                    </button>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                                <h3 className="font-semibold text-blue-900 mb-2">Cara Menggunakan:</h3>
                                <ol className="list-decimal list-inside text-sm text-blue-800 space-y-1">
                                    <li>Salin API key di atas</li>
                                    <li>Tambahkan header <code className="bg-blue-100 px-1 rounded">x-api-key</code> pada setiap request</li>
                                    <li>Lihat dokumentasi untuk contoh penggunaan</li>
                                </ol>
                            </div>

                            <div className="flex gap-4">
                                <button
                                    onClick={() => setApiKey('')}
                                    className="btn-secondary flex-1"
                                >
                                    Registrasi Lagi
                                </button>
                                <a
                                    href="/documentation"
                                    className="btn-primary flex-1 text-center"
                                >
                                    Lihat Dokumentasi
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Register;
