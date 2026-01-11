import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5001/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add API key to requests if available
api.interceptors.request.use((config) => {
    const apiKey = localStorage.getItem('apiKey');
    if (apiKey) {
        config.headers['x-api-key'] = apiKey;
    }
    return config;
});

// Handle errors
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            // Server responded with error
            return Promise.reject(error.response.data);
        } else if (error.request) {
            // No response received
            return Promise.reject({ message: 'Tidak dapat terhubung ke server' });
        } else {
            // Request setup error
            return Promise.reject({ message: 'Terjadi kesalahan pada request' });
        }
    }
);

export default api;
