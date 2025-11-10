import React, { use } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import api from "../../services/api";

export const PrivateRoutes = () => {

  if (!localStorage.getItem("token")) {
    return <Navigate to="/student/login" />;
  }
  const {setUser} = useAppContext();

  useEffect(() => {
    const getUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await api.get("/alunos/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const user = response.data;
          setUser(user);
        }
      } catch (err) {
        if (localStorage.getItem("token")) {
          localStorage.removeItem("token");
        }
      }
    };
    getUser();
  }, []);

  return <Outlet />;
};
