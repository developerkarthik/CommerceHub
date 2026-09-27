const API_BASE_URL = "http://localhost:8000";

const apiClient = async <T>(path: string , options: RequestInit):Promise<T> => {
        const response = await fetch(`${API_BASE_URL}${path}`, {
            ...options,
            credentials: "include",
            headers:{
                "Content-Type": "application/json",
                ...options.headers
            }
        });

        if(!response.ok){
            throw new Error('Request failed:' + response.status);
        }

        return response.json();
}


export default apiClient;