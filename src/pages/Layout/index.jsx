import { Outlet } from "react-router-dom";
import logo from "../../assets/logo2.png";
import style from "./style.module.css";
import { CardNotifications } from "../../componets/Cards/CardNotifications";

export const Layout = () => {
  return (
    <>
      <main className={style.container}>
        <CardNotifications/>

        <section className={style.containerHero}></section>
        <section className={style.content}>
          <div>
            <img src={logo} alt="" />
          </div>
          <Outlet />
        </section>
      </main>
    </>
  );
};
