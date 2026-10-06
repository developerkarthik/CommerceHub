import apiClient from './client';


const fetchUsers = () => {
    return apiClient('/api/users', {
        method: 'GET'
    })
}


export default {
    fetchUsers
}