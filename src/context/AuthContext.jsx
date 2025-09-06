import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  // Cargar estado guardado al iniciar
  useEffect(() => {
    const savedAuth = localStorage.getItem("isAuth");
    if (savedAuth === "true") setIsAuth(true);
  }, []);

  const login = (user, pass) => {
    if (user === "Oasis" && pass === "2025") {
      setIsAuth(true);
      localStorage.setItem("isAuth", "true"); // persistir
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("isAuth"); // limpiar
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
