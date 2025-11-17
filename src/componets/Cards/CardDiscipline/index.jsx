import React from "react";
import style from "./style.module.css";


export const CardDiscipline = ({
  modalidade,
  disciplineName,
  absences,
  note,
  teacherName,
}) => {


  return (
    <>
      <article className={style.card}>
        <div className={style.discipline_info}>
          <div>
            <p>{modalidade}</p>
            <h1>{disciplineName}</h1>
          </div>
          <div>
            <p>{"Professor(a):"}</p>
            {teacherName && <span>{teacherName}</span>}
          </div>
        </div>
        <div className={style.container_note_absence}>
          <div className={style.absences}>
            <div className={style.value}>
              <span>{absences || 0}</span>
            </div>
            <div className={style.label}>
              <p>{"Faltas"}</p>
            </div>
          </div>
          <div className={style.notes}>
            <div className={style.value}>
              <span>{note || "- -"}</span>
            </div>
            <div className={style.label}>
              <p>{"1° Avaliação"}</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
