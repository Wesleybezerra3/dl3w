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



function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Layout/>}>
            <Route index element={<SelectRole/>}/>
            <Route path="selectcourse" element={<SelectCourse/>}/>
            <Route path="login" element={<Login/>}/>
          </Route>

           <Route path="/dashboard" element={<DashboardLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="disciplinashorarios" element={<SubjectSchedules/>}/>
            <Route path="alunos" element={<Students/>}/>
            <Route path="turmas" element={<PageClass/>}/>

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App
