import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { requestApi } from "../../services/api";
import { IAuthProvider, IContext, IUser } from "./types";

export const AuthContext = createContext({} as IContext);

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<IUser | null>();
  const [errorResponse, setErrorResponse] = useState<any>(undefined);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const isLogged = localStorage.getItem("user");
    if (isLogged) {
      setUser(JSON.parse(isLogged));
    }
    setLoading(false);
  }, []);

  async function login(email: string, password: string) {
    try {
      const response = await requestApi.post("/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("user", JSON.stringify(response.data));
      setUser(response.data);
      navigate("/home");
      return await response.data;
    } catch (error) {
      setErrorResponse("errorLogin");
    }
  }

  function writeError(email: string, password: string) {
    if (email == "") {
      setErrorResponse("empty");
    } else if (password == "") {
      setErrorResponse("empty");
    } else {
      login(email, password);
    }
  }

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated: !!user,
        user,
        login,
        logout,
        writeError,
        loading,
        errorResponse,
        setErrorResponse
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
