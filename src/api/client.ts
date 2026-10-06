const API_BASE_URL = "http://localhost:8000";


export const rawRequest = async (path: string , options: RequestInit):Promise<Response> => {
    return await fetch(`${API_BASE_URL}${path}`, {
            ...options,
            credentials: "include",
            headers:{
                "Content-Type": "application/json",
                ...options.headers
            }
        });
}

const apiClient = async <T>(path: string , options: RequestInit):Promise<T | void> => {
    try{
        const response = await rawRequest(path , options)

        if(!response.ok){
            throw new Error('Request failed:' + response.status);
        }

        return response.json();
    }catch(error){
        console.log(error);
    }
        
}


export default apiClient;