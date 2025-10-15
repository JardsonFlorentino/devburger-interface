import { useUser } from '../hooks/UserContext';
import { Navigate, Outlet } from 'react-router-dom';

export function PrivateRoute() {
    const { userInfo } = useUser(); // Corrigido!
    return userInfo && userInfo.token ? <Outlet /> : <Navigate to="/login" replace />;
}
