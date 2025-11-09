import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../services/api";

// Cria o contexto para o fluxo
export const AppContext = createContext();

// Provedor do contexto
export const ContextProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);

  // const [role, setRole] = useState(() => {
  //   const saved = localStorage.getItem("role");
  //   return saved ? JSON.parse(saved) : null;
  // });

  // const [course, setCourse] = useState(() => {
  //   const saved = localStorage.getItem("course");
  //   return saved ? JSON.parse(saved) : null;
  // });

  // useEffect(() => {
  //   localStorage.setItem("role", JSON.stringify(role));
  // }, [role]);

  // useEffect(() => {
  //   localStorage.setItem("course", JSON.stringify(course));
  // }, [course]);

  useEffect(() => {
    const getAllStudents = async () => {
      try {
        const response = await api.get("/alunos");
        setStudents(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllStudents();
  }, []);

  useEffect(() => {
    const getClasses = async () => {
      try {
        const response = await api.get("/turmas");
        setClasses(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getClasses();
  }, []);

  return (
    <AppContext.Provider
      value={{
        students,
        setStudents,
        classes,
        setClasses,
      }}
    >
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
