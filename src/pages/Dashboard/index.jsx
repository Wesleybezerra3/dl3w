import React from "react";
import style from "./style.module.css";
import { CardDashboard } from "../../componets/Cards/CardDashboard";
import { CardSchedule } from "../../componets/Cards/CardSchedule";
import studentIcon from "../../assets/icons/StudentIcon.png";
import teacherIcon from "../../assets/icons/TeacherIcon.png";
import bookIcon from "../../assets/icons/BookIcon.png";
import course from "../../assets/icons/Course.png";
import door from "../../assets/icons/Door.png";
import { GraficoDeLinhas } from "../../componets/Grafic";
import { GraficoDeBarras } from "../../componets/GraficBar";
import { useAppContext } from "../../context/AppContext";
// import { GraficoDePizza } from "../../componets/GraficPie";

export const Dashboard = () => {
  const {students, classes,teachers, rooms,courses} = useAppContext();
  return (
    <>
      <section className={style.container}>
        <div className={style.infoArea}>
          <CardDashboard
            text="Alunos"
            route={'alunos'}
            number={students.length}
            backColor="#0A51BD"
            icon={studentIcon}
            textSecudary=" matriculados"
          />
          <CardDashboard
            text="Professores"
            route={'professores'}
            number={teachers.length}
            backColor="#038B20"
            icon={teacherIcon}
            textSecudary=" ativos"
          />
          {/* <CardDashboard
            text="Disciplinas"
            number="7"
            backColor="#999514"
            icon={bookIcon}
          /> */}
          <CardDashboard
            text="Cursos"
            route={'cursos'}
            number={courses.length}
            backColor="#FF6C02"
            icon={course}
            textSecudary=" disponíveis"
          />
          <CardDashboard
            text="Turmas"
            route={'turmas'}
            number={classes.length}
            backColor="#25afafff"
            icon={door}
            textSecudary=" cadastradas"
          />
          <CardDashboard
            text="Salas"
            route={'salas'}
            number={rooms.length}
            backColor="#839426ff"
            icon={door}
            textSecudary=" cadastradas"
          />
        </div>

        <div className={style.graphsArea}>
          <div className={style.containerGraphs}>
            <div>
               <h1>Distribuição de alunos por curso</h1> 
              <GraficoDeBarras />
            </div>

            {/* <div>
              <h1>Matrículas de alunos por mês</h1> 
              <GraficoDeLinhas />
            </div> */}
          </div>

          {/* <div className={style.recentActivities}>
            <aside>
              <p>Atividades Recentes</p>
              <div></div>
            </aside>
          </div> */}
          {/* <GraficoDePizza/> */}
        </div>
        {/* <div className={style.scheduleArea}>
          <div className={style.headerSchedule}>
            <p>Horário das turmas</p>
          </div>
          <div className={style.schedule}>
            <CardSchedule day="Segunda-feira" />
            <CardSchedule day="Terça-feira" />
            <CardSchedule day="Quarta-feira" />
            <CardSchedule day="Quinta-feira" />
            <CardSchedule day="Sexta-feira" />
          </div>
        </div> */}
      </section>
    </>
  );
};
