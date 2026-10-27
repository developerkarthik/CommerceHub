import apiClient from './client';
import auth from './auth';

const fetchProductById = async (id: string | undefined) => {
    const response = await apiClient(`/api/products/${id}`, {
        method: 'GET'
    });

    return response;
}

const updateProductById = async () => {
    const response = await apiClient('/api/products/3', {
        method: 'PATCH',
        body: JSON.stringify({ price: 150 })
    });
    return response;
}


const fetchProducts = async () => {
    const response = await apiClient('/api/products', {
        method: 'GET'
    });

    return response;
}


const fetchProductUserViews = async (id) => {
    const response = await apiClient(`/api/products/${id}/userviews`, {
        method: 'GET'
    });

    return response;
}

export default {
    fetchProductById,
    updateProductById,
    fetchProducts,
    fetchProductUserViews
}