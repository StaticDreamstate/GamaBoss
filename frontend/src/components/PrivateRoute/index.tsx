import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function Private({ children }: any) {
  const { authenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="text-2xl">CARREGANDO</div>;
  }
  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}
