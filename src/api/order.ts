import apiClient, { rawRequest } from './client';
import auth from './auth';

const fetchOrderById = async () => {
    const response = await rawRequest('/api/orders/15', {
        method: 'GET'
    });
    
    if(response.status === 401){
        const refreshStatus = await auth.refreshToken();
        console.log(refreshStatus);
    }
}


export default {
    fetchOrderById
}