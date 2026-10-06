import { useAuth } from "../context/AuthProvider"
import {Navigate, Outlet} from 'react-router';

const ProtectedRouter = () => {

    const { status } = useAuth();
    
    console.log(status);

    if(status === 'loading'){
        return <div>Loading...</div>
    }

    if(status === 'unauthenticated') {
        return <Navigate to='/login' replace/>
    }

    return <Outlet />
}

export default ProtectedRouter;