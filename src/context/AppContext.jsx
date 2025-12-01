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
  const [teachers, setTeachers] = useState([]);
  const [classes, setClasses] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [courses, setCurses] = useState([]);
  const [disciplines, setDisciplines] = useState([]);
  const [user, setUser] = useState(null);
  const [visibleLoad, setVisibleLoad] = useState(false)

  const [notificationMessage, setNotificationMessage] = useState('');
  const [resetKey, setResetKey] = useState();
  const [typeNotification, setTypeNotification] = useState('');

  const [refreshKey, setRefreshKey] = useState(0);

  // função que atualiza a flag
  const refresh = () => setRefreshKey(prev => prev + 1);



  // useEffect(()=>{
  // },[notificationMessage,resetKey,typeNotification])

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
        console.log('Alunos',response.data)

      } catch (err) {
        console.log(err);
      }
    };
    getAllStudents();
  }, [refreshKey]);

  useEffect(() => {
    const getAllDisciplines = async () => {
      try {
        const response = await api.get("/disciplinas");
        setDisciplines(response.data);
        console.log('Disciplinas',response.data)

      } catch (err) {
        console.log(err);
      }
    };
    getAllDisciplines();
  }, [refreshKey]);

  useEffect(() => {
    const getAllTeachers = async () => {
      try {
        const response = await api.get("/professores");
        setTeachers(response.data);
        console.log('Professores',response.data)
      } catch (err) {
        console.log(err);
      }
    };
    getAllTeachers();
  }, [refreshKey]);

  useEffect(() => {
    const getClasses = async () => {
      try {
        const response = await api.get("/turmas");
        console.log("Turmas", response.data);
        setClasses(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getClasses();
  }, [refreshKey]);

  useEffect(() => {
    const getRooms = async () => {
      try {
        const response = await api.get("/salas");
        console.log("Salas", response.data);
        setRooms(response.data)
      } catch (err) {
        console.log(err);
      }
    };

    getRooms();
  },[refreshKey]);

  useEffect(()=>{
    const getCourses = async()=>{
      try{
        const response = await api.get('/cursos');
        console.log('Curso', response.data)
        setCurses(response.data)
      }catch(err){
        console.log(err)
      }
    }
    getCourses()
  },[refreshKey])

  return (
    <AppContext.Provider
      value={{
        students,
        setStudents,
        classes,
        setClasses,
        user,
        setUser,
        setTeachers,
        teachers,
        rooms,
        setRooms,
        courses,
        setNotificationMessage,
        notificationMessage,
        typeNotification,
        setTypeNotification,
        setResetKey,
        resetKey,
        refresh,
        refreshKey,
        setVisibleLoad,
        visibleLoad,
        disciplines

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
