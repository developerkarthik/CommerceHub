import { createContext, useEffect, useState, type ReactNode } from "react"
import auth from "../../../api/auth"

type User = {
    name: String
}

type AuthProviderProps = {
    children: ReactNode
}

type AuthStatus = | "loading" | "authenticated" | "authenticated";

const AuthContext = createContext<User | undefined>(undefined);

const AuthProvider = ({ children } : AuthProviderProps) => {
    
    const [user, setUser] = useState<User | undefined>(undefined);
    const [status, setStatus] = useState<AuthStatus>('loading');

    useEffect(() => {
        const loadUser = async () => {
            try{
                const response = await auth.getMe();
                console.log(response);
            }catch(error){
                console.log(error);
            }
        }

        loadUser();
    }, [])
    
    return (
        <AuthContext.Provider value={ {user, status} }>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;