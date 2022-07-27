import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { requestApi } from "../../services/api";
import { IAuthProvider, IContext, IUser } from "./types";

export const AuthContext = createContext({} as IContext);

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<IUser | null>();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const isLogged = localStorage.getItem("user");
    if (isLogged) {
      setUser(JSON.parse(isLogged));
    }
    setLoading(false);
  }, []);

  const login = (email: string, password: string) => {
    requestApi
      .post("/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        localStorage.setItem("user", JSON.stringify(response.data));
        setUser(response.data);
        navigate("/home");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
