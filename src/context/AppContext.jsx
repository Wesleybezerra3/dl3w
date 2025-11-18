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
  const [user, setUser] = useState(null);

  const [notificationMessage, setNotificationMessage] = useState('');
  const [resetKey, setResetKey] = useState();
  const [typeNotification, setTypeNotification] = useState('');



  useEffect(()=>{
    console.log('Atualizados',notificationMessage)
  },[notificationMessage,resetKey,typeNotification])

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
  }, []);

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
  }, []);

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
  }, []);

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
  },[]);

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
  },[])

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
        resetKey
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
