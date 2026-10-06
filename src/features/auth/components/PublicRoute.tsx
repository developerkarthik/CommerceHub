import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../context/AuthProvider';


const PublicRoute = () => {
    const { status } = useAuth();

    if(status === 'loading'){
        return <div>Loading...</div>        
    }

    if(status === 'authenticated'){
        return <Navigate to="/" replace />
    }
    return <Outlet />
}

export default PublicRoute;