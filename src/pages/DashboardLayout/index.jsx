import React from "react";
import style from "./style.module.css";
import { MenuSide } from "../../componets/ui/MenuSide";
import { HeaderDashboard } from "../../componets/HeaderDashboard";
import {CardNotifications} from '../../componets/Cards/CardNotifications'
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <main className={style.dashboardLayout}>
      <CardNotifications/>
      <MenuSide/>
      <section className={style.content}>
       <HeaderDashboard/>
       <Outlet/>
      </section>
    </main>
  );
};
