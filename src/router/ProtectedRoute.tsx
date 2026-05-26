// Example of your future Supabase production switch inside this file:
//import { useAuth } from '../../hooks/useAuth'; // Custom state consumer
//import { Skeleton } from '../ui/Skeleton';
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectedRoute: React.FC = () => {
  //const { session, isLoading } = useAuth(); // Reads real live Supabase sessions
  const location = useLocation();
  const session = true;
  const isLoading = false;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center">
        {/*<Skeleton className="w-12 h-12 rounded-full" />*/}
        loading
      </div>
    );
  }

  return session ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
