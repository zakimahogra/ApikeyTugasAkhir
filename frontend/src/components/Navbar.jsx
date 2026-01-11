import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'text-primary-600 font-semibold' : 'text-gray-600 hover:text-primary-600';
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">U</span>
                        </div>
                        <span className="text-xl font-bold text-gray-800">UMKM Open API</span>
                    </Link>

                    <div className="flex space-x-6">
                        <Link to="/" className={`transition-colors ${isActive('/')}`}>
                            Beranda
                        </Link>
                        <Link to="/register" className={`transition-colors ${isActive('/register')}`}>
                            Daftar API
                        </Link>
                        <Link to="/documentation" className={`transition-colors ${isActive('/documentation')}`}>
                            Dokumentasi
                        </Link>
                        <Link to="/products" className={`transition-colors ${isActive('/products')}`}>
                            Produk
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
