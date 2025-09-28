import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

// Cria o contexto para o fluxo
export const AppContext = createContext();

// Provedor do contexto
export const ContextProvider = ({ children }) => {
  const [role, setRole] = useState(() => {
    const saved = localStorage.getItem("role");
    return saved ? JSON.parse(saved) : null;
  });

  const [course, setCourse] = useState(() => {
    const saved = localStorage.getItem("course");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    localStorage.setItem("role", JSON.stringify(role));
  }, [role]);

  useEffect(() => {
    localStorage.setItem("course", JSON.stringify(course));
  }, [course]);

  return (
    <AppContext.Provider value={{ role, setRole, course, setCourse }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook para usar o contexto
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useContext deve ser usado dentro de um contextProvider");
  }
  return context;
};
