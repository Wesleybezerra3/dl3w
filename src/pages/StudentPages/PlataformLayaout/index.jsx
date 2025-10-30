import React, { useState } from "react";
import { HeaderStudent } from "../../../componets/Students/Header";
import style from "./style.module.css";
import { Outlet } from "react-router-dom";
import { MenuSide } from "../../../componets/Students/MenuSide";
import { Bell, Menu } from "lucide-react";
import logo from "../../../assets/logo2.png";

export const PlataformLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const periods = ["2025.1", "2025.2", "2026.3", "2026.4"];
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(periods.length - 1, c + 1));

  return (
    <>
      <header className={style.header}>
        <div>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <Menu size={25} />
          </button>
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <Bell size={20} />
          </button>
        </div>
      </header>
      <MenuSide visible={isOpen} onClose={() => setIsOpen(!isOpen)} />
      <main>
        <section className={style.containerWelcome}>
          <h1>Olá! Wesley Bezerra👋</h1>
        </section>
        <section>
          <div className={style.courseName}>
            <h2>Análise e desenvolvimento de sistemas</h2>
          </div>
          <div className={style.carroselPeriods}>
            <button
              className={style.btnPeriods}
              onClick={prev}
              aria-label="Anterior"
              disabled={current === 0}
            >
              <ArrowLeftCircleIcon size={20} className={style.iconBtn} />
            </button>

            <div className={style.viewport}>
              <div
                className={style.track}
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {periods.map((period, index) => (
                  <div className={style.slide} key={index}>
                    <BtnPeriods period={period} />
                  </div>
                ))}
              </div>
            </div>

            <button
              className={style.btnPeriods}
              onClick={next}
              aria-label="Próximo"
              disabled={current === periods.length - 1}
            >
              <ArrowRightCircle size={20} className={style.iconBtn} />
            </button>
          </div>
        </section>

        <section className={style.content}>
          <Outlet />
        </section>
      </main>

      <footer></footer>
    </>
  );
};
