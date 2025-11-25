import React from "react";
import { Outlet } from "react-router-dom";
import style from './style.module.css'

export const LayoutStudentPage = () => {
  return (
    <>
      <main className={style.Layout}>
        {/* <MenuSide /> */}
        <section className={style.content}>
          <Outlet />
        </section>
      </main>
    </>
  );
};
