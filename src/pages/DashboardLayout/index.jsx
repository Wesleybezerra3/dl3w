import React from "react";
import style from "./style.module.css";
import { MenuSide } from "../../componets/ui/MenuSide";
import { HeaderDashboard } from "../../componets/HeaderDashboard";
import {CardNotifications} from '../../componets/Cards/CardNotifications'
import { Outlet } from "react-router-dom";
import { PageLoad } from "../../componets/Loards/PageLoad";

export const DashboardLayout = () => {
  return (
    <main className={style.dashboardLayout}>
      <PageLoad/>
      <CardNotifications/>
      <MenuSide/>
      <section className={style.content}>
       <HeaderDashboard/>
       <Outlet/>
      </section>
    </main>
  );
};
