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
                <Route path="turmas" element={<PageClass />} />
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
