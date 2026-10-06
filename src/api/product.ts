import apiClient from './client';
import auth from './auth';

const fetchProductById = async () => {
    const response = await apiClient('/api/products/3', {
        method: 'GET'
    });

    return response;
}


export default {
    fetchProductById
}