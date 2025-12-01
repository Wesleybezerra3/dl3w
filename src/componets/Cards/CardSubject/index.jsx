import React from "react";
import style from "./style.module.css";
import editIcon from "../../../assets/icons/Edit.png";
import { Edit, Eye } from "lucide-react";

export const CardSubject = ({ discipline, workload, modality }) => {
  return (
    <article className={style.card}>
      <header className={style.headerCard}>
        <p>{discipline}</p>
      </header>

      <section className={style.contentCard}>
        <span><strong>Carga Horária:</strong> {workload}</span>
        <span><strong>Modalidade:</strong> {modality}</span>
      </section>

      <footer className={style.actionsCard}>
        <button>
          <Eye/>
        </button>
      </footer>
    </article>
  );
};
