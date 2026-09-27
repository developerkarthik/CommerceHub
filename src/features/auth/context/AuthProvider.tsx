import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import auth from "../../../api/auth"
import apiClient from "../../../api/client"

type User = {
    name: String
}

type AuthProviderValue = {
    user: User | undefined,
    status: AuthStatus,
    login: (username: string, password: string) => Promise<void>
}

type AuthProviderProps = {
    children: ReactNode
}

type AuthStatus = | "loading" | "authenticated" | "unauthenticated";

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('useAuth must be used within AuthProvider')
    }

    return context;
}


const AuthContext = createContext<AuthProviderValue | undefined>(undefined);



const AuthProvider = ({ children } : AuthProviderProps) => {
    
    const [user, setUser] = useState<User | undefined>(undefined);
    const [status, setStatus] = useState<AuthStatus>('loading');

    useEffect(() => {
        const loadUser = async () => {
            try{
                const response = await auth.getMe();
                setUser(response.data);
                setStatus('authenticated');
            }catch(error){
                setStatus('unauthenticated');
            }
        }

        loadUser();
    }, [])
    
    const login = async (username: string, password: string) => {
        await auth.login({username, password});
        const response = await auth.getMe();
        //console.log(response);
        setUser(response.data);
        setStatus('authenticated');
    }

    return (
        <AuthContext.Provider value={ {user, status, login} }>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;