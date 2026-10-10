import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import auth from "../../../api/auth"

type User = {
    name: String
}

type AuthProviderValue = {
    user: User | undefined,
    status: AuthStatus,
    login: (username: string, password: string) => Promise<void>,
    register: (username: string, password:string) => Promise<void>,
    logout: () => Promise<void>
    logoutAll: () => Promise<void>
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
        try{
            const response = await auth.login({username, password});
            if(!response.ok){
                throw new Error(response.message)
            }
            const user = await auth.getMe();
            //console.log(response);
            setUser(user.data);
            setStatus('authenticated');
        }catch(error){
            console.log(error);
        }
        
    }

    const register = async (username: string, password: string) => {
        await auth.register({ username, password });
    }

    const logout = async () => {
        await auth.logout();
        setUser(undefined);
        setStatus('unauthenticated');
    }

    const logoutAll = async () => {
        try{
            await auth.logoutAll();
            setUser(undefined);
            setStatus('unauthenticated');
        }catch(error){  
            console.log(error);
        }
        
    }

    return (
        <AuthContext.Provider value={ {user, status, login, register, logout, logoutAll} }>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;