import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SelectRole } from "./componets/SelectRole";
import { Layout } from "./pages/Layout";
import { Login } from "./pages/Login";
import { DashboardLayout } from "./pages/DashboardLayout";
import { Dashboard } from "./pages/Dashboard";
import { SubjectSchedules } from "./pages/SubjectSchedules";
import { SelectCourse } from "./componets/SelectCourse";
import { Students } from "./pages/Students";
import { PageClass } from "./pages/PageClass";
import { FirstAcess } from "./pages/StudentPages/FirstAcess";
import { LoginStudent } from "./pages/StudentPages/Login";
import { PasswordDefine } from "./pages/StudentPages/passwordDefine";
import { PlataformLayout } from "./pages/StudentPages/PlataformLayaout";
import { HomeStudent } from "./pages/StudentPages/Home";
import { MyCourse } from "./pages/StudentPages/MyCourse";
import { PrivateRoutesStudent } from "./pages/PrivateRoutesStudent";
import { PrivateRoutesAdmin } from "./pages/PrivateRoutesAdmin";
import { Teachers } from "./pages/Teachers";
import { Rooms } from "./pages/Rooms";
import { StudentDinamic } from "./pages/StudentDinamic";
import { TeacherDinamic } from "./pages/TeacherDinamic";
import { ClassDinamic } from "./pages/ClassDinamic";
import { RoomDinamic } from "./pages/RoomDinamic";
import { Repots } from "./pages/Repots";
import { Courses } from "./pages/Courses";
import { LoginTeacher } from "./pages/TeacherPages/Login";
import { PlataformLayouTeacher } from "./pages/TeacherPages/PlataformLayaout";
import { HomeTeacher } from "./pages/TeacherPages/Home";
import { PrivateRoutesTeacher } from "./pages/PrivateRoutesTeacher";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<SelectRole />} />
            <Route path="selectcourse" element={<SelectCourse />} />

            <Route path="login" element={<Login />} />

            <Route path="student">
              <Route path="acess" element={<FirstAcess />} />
              <Route path="login" element={<LoginStudent />} />
              <Route path="definir-senha" element={<PasswordDefine />} />
            </Route>
            
            <Route path="teacher">
              <Route path="login" element={<LoginTeacher />} />
              <Route path="definir-senha" element={<PasswordDefine />} />
            </Route>
          </Route>

          <Route element={<PrivateRoutesAdmin />}>
            <Route path="adm">
              <Route path="dashboard" element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
                <Route
                  path="disciplinashorarios"
                  element={<SubjectSchedules />}
                />
                <Route path="alunos" element={<Students />} />
                <Route path="alunos/:matricula" element={<StudentDinamic />} />

                <Route path="professores" element={<Teachers />} />
                <Route path="professores/:matricula" element={<TeacherDinamic />} />

                <Route path="turmas" element={<PageClass />} />
                <Route path="turmas/:name" element={<ClassDinamic />} />
                <Route path="salas" element={<Rooms />} />
                <Route path="salas/:name" element={<RoomDinamic />} />
                <Route path="cursos" element={<Courses />} />
                <Route path="relatorios" element={<Repots />} />

              </Route>
            </Route>
          </Route>

          <Route element={<PrivateRoutesStudent />}>
            <Route path="student">
              <Route path="plataform" element={<PlataformLayout />}>
                <Route index element={<HomeStudent />} />
                <Route path="home" element={<HomeStudent />} />
                <Route path="mycourse" element={<MyCourse />} />
              </Route>
            </Route>
          </Route>

           <Route element={<PrivateRoutesTeacher />}>
            <Route path="teacher">
              <Route path="plataform" element={<PlataformLayouTeacher />}>
                <Route index element={<HomeTeacher />} />
                <Route path="home" element={<HomeTeacher />} />
                <Route path="mycourse" element={<MyCourse />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
