import apiClient from './client';


const fetchOrderById = () => {
    return apiClient('/api/orders/15', {
        method: 'GET'
    })
}


export default {
    fetchOrderById
}