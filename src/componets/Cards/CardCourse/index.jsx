import React from "react";
import style from "./style.module.css";
import editIcon from "../../../assets/icons/Edit.png";

export const CardCourse = ({ name, description, totalSubjects }) => {
  return (
    <article className={style.card}>
      <div className={style.cardHeader}>
        <h3>{name}</h3>
      </div>

      <div className={style.cardBody}>
        <p>{description || "Sem descrição"}</p>
        <span>{totalSubjects} disciplinas</span>
      </div>

      <div className={style.cardFooter}>
        <button>
          <img src={editIcon} alt="Editar" />
        </button>
      </div>
    </article>
  );
};
