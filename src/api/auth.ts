import apiClient from './client';

interface LoginRequest {
    username: string,
    password: string
}

interface LoginResponse {
    message: string
}

interface RegisterRequest {
    username: string,
    password: string
}

interface RegisterResponse {
    message: string
}

interface MeResponse {
    name: string
}

const login = (data: LoginRequest) => {
    return apiClient<LoginResponse>('/auth/login', {
        method: 'POST',
        body: JSON.stringify(data)
    })
}

const register = (data: RegisterRequest) => {
    return apiClient<RegisterResponse>('/auth/register', {
        method: 'POST',
        body: JSON.stringify(data)
    })
}


const getMe = () => {
    return apiClient<RegisterResponse>('/auth/me', {
        method: 'GET'
    });
}

export default {
    login,
    register,
    getMe
}