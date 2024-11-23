import React from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { user, loading } = useAuthStore();

    if (loading) {
        return <div>Loading...</div>;
    };

    return user ? <>{children}</> : <Navigate to="/login" />;
    
}

export default PrivateRoute;