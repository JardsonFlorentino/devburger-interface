import { useUser } from '../hooks/UserContext';
import { Navigate, Outlet } from 'react-router-dom';

export function PrivateRoute() {
    const { userInfo, loading } = useUser();

    if (loading) {
        return <div>Carregando...</div>;
    }

    return userInfo && userInfo.token ? <Outlet /> : <Navigate to="/login" replace />;
}
