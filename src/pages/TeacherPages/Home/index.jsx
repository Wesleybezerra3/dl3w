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
        <CardDashboardStudent
          backColor={"#038B20"}
          number={91}
          icon={calendar}
          text={"Presença"}
          textSecudary={"Global"}
        />
        <CardDashboardStudent
          backColor={"#0A51BD"}
          number={8.5}
          icon={note}
          text={"Média"}
          textSecudary={"Global"}
        />
        <CardDashboardStudent
          backColor={"#999514"}
          number={6.8}
          icon={goodNotes}
          text={"Ultima Nota"}
          textSecudary={"Banco de dados"}
        />
      </section>

      <section className="container">
        <div className={style.bottomMenu}>
          <button className={style.btnActive}>
            Sobre o Curso
            <img src={arrow} alt="" />
          </button>

          <button className={style.btnActive}>
            Quadro de Horários
            <img src={arrow} alt="" />
          </button>
        </div>
      </section>
    </>
  );
};
