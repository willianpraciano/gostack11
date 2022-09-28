import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

export function PrivateRoutes({}) {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/" replace />;
}
