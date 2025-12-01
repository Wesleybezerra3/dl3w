import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { BtnPeriods } from "../../../componets/Students/BtnPeriods";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircle,
  ArrowRightCircleIcon,
} from "lucide-react";

import calendar from "../../../assets/icons/Calendar.png";
import note from "../../../assets/icons/Note.png";
import goodNotes from "../../../assets/icons/GoodNotes.png";
import arrow from "../../../assets/icons/Arrow.png";
import { CardDashboardStudent } from "../../../componets/Cards/CardDashboardStudent";
import { Link } from "react-router-dom";
import api from "../../../services/api";
import { useAppContext } from "../../../context/AppContext";

export const HomeTeacher = () => {
  const {user} = useAppContext();
  useEffect(() => {
    console.log('Dados do professor carregados:', user);
  }, []);
  
  return (
    <>
      <section className="container">
        <div className={style.containerDisciplines}>
          <h1>
            Minhas disciplinas
          </h1>

          <div className={style.containerCardDisciplines}>
  {user?.disciplinas && user?.disciplinas.length > 0 ? (
    user.disciplinas.map((disciplina) => {
      return (
        <article className={style.card} key={disciplina.id}>
          <p>{disciplina?.nome}</p>

          <div>
            <p>Turmas:</p>
            <p>{disciplina.turmasCount || 0}</p>
          </div>

          <div>
            <p>Alunos:</p>
            <p>{disciplina.totalAlunos || 0}</p>
          </div>
        </article>
      );
    })
  ) : (
    <p>Nenhuma Disciplina atribuída</p>
  )}
</div>
        </div>
        
      </section>

    </>
  );
};
