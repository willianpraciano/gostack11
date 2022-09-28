import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

export function PublicRoutes() {
  const { user } = useAuth();
  return user ? <Navigate to="/dashboard" replace /> : <Outlet />;
}
