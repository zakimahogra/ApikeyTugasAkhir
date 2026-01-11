import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Documentation from './pages/Documentation';
import Products from './pages/Products';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/documentation" element={<Documentation />} />
                    <Route path="/products" element={<Products />} />
                </Routes>

                {/* Footer */}
                <footer className="bg-gray-800 text-white py-8 mt-16">
                    <div className="container mx-auto px-4 text-center">
                        <p className="text-gray-400">
                            © 2026 UMKM Open API. Layanan Informasi Produk UMKM Berbasis RESTful API
                        </p>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;
