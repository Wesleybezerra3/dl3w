import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SelectRole } from "./componets/SelectRole";
import { Layout } from "./pages/Layout";
import { Login } from "./pages/Login";
import { DashboardLayout } from "./pages/DashboardLayout";
import { Dashboard } from "./pages/Dashboard";


function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Layout/>}>
            <Route index element={<SelectRole/>}/>
            <Route path="login" element={<Login/>}/>
          </Route>

           <Route path="/dashboard" element={<DashboardLayout/>}>
            <Route index element={<Dashboard/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App
