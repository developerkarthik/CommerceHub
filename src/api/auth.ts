import apiClient, { rawRequest } from './client';

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
    message: string,
    data: any
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


const getMe = async () => {
    let response = await rawRequest('/auth/me', {
        method: 'GET'
    });

    if(response.status === 401){
        await refreshToken();
            response = await rawRequest('/auth/me', {
            method: 'GET'
        });
    }

    return response.json();

    // return apiClient<RegisterResponse>('/auth/me', {
    //     method: 'GET'
    // });
}

const refreshToken = async () => {
    const response = await rawRequest('/auth/refresh', {
        method: 'POST'
    });

    if(!response.ok){
        throw new Error("Session/Token expired. Please login again.");
    }
    return response.json();
}

export default {
    login,
    register,
    getMe,
    refreshToken
}