import React from "react";
import style from "./style.module.css";

export const CardDashboard = () => {
  return (
    <>
      <article className={style.card}>
        <div>
          <div>
            <p>{"Presencial"}</p>
            <p>{"Arquitetura de softaware"}</p>
          </div>
          <div>
            <p>{"Professor(a):"}</p>
            <p>{"Jorge Lucas Alves"}</p>
          </div>
        </div>
        <div className={style.contentLeft}>
          <div className={style.containerAbsences}>
            <div>20/55</div>
            <div>faltas</div>
          </div>
          <div className={style.containerNotes}>
            <div>8.0</div>
            <div>1° Avaliação</div>
          </div>
        </div>
      </article>
    </>
  );
};
