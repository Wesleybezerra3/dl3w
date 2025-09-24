import React from "react";
import style from "./style.module.css";
import { MenuSide } from "../../componets/MenuSide";
import { HeaderDashboard } from "../../componets/HeaderDashboard";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <main className={style.dashboardLayout}>
      <MenuSide/>
      <section className={style.content}>
       <HeaderDashboard/>
       <Outlet/>
      </section>
    </main>
  );
};
