import React, { useState } from "react";
import style from "./style.module.css";

import { CardDashboard } from "../../componets/Cards/CardDashboard";
import studentIcon from "../../assets/icons/StudentIcon.png";
import teacherIcon from "../../assets/icons/TeacherIcon.png";
import bookIcon from "../../assets/icons/BookIcon.png";
import course from "../../assets/icons/Course.png";
import door from "../../assets/icons/Door.png";

import { GraficoDeBarras } from "../../componets/GraficBar";
import { GraficoDePizza } from "../../componets/GraficPie";

import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { PageLoad } from "../../componets/Loards/PageLoad";

export const Dashboard = () => {
  const { students, classes, teachers, rooms, courses } = useAppContext();
  const [resumeSelect, setResumeSelect] = useState("1");
  const navigate = useNavigate();

  return (
    <section className={style.container}>
      {/* ======= CARDS SUPERIORES ======= */}
      <div className={style.infoArea}>
        <CardDashboard
          text="Alunos"
          route={"alunos"}
          number={students?.totalStudents}
          backColor="#0A51BD"
          icon={studentIcon}
          textSecudary=" matriculados"
        />

        <CardDashboard
          text="Professores"
          route={"professores"}
          number={teachers?.totalTeachers}
          backColor="#038B20"
          icon={teacherIcon}
          textSecudary=" ativos"
        />

        <CardDashboard
          text="Cursos"
          route={"cursos"}
          number={courses?.length}
          backColor="#FF6C02"
          icon={course}
          textSecudary=" disponíveis"
        />

        <CardDashboard
          text="Turmas"
          route={"turmas"}
          number={classes?.length}
          backColor="#25AFAF"
          icon={door}
          textSecudary=" cadastradas"
        />

        <CardDashboard
          text="Salas"
          route={"salas"}
          number={rooms?.total_rooms}
          backColor="#839426"
          icon={door}
          textSecudary=" cadastradas"
        />
      </div>

      {/* ======= GRÁFICOS ======= */}
      <div className={style.graphsArea}>
        <div className={style.containerGraphs}>
          <div className={style.graphBox}>
            <h1>Distribuição de alunos por curso</h1>
            <GraficoDeBarras />
          </div>

          <div className={style.graphBox}>
            <h1>Ativos x Inativos</h1>
            <GraficoDePizza />
          </div>
        </div>

        {/* LISTAS RECENTES */}
        <div className={style.recentActivities}>
          <aside>
            <div className={style.group}>
              <div className={style.resumeBtns}>
                <button
                  className={`${style.btnResume} ${
                    resumeSelect === "1" ? style.select : style.disabled
                  }`}
                  onClick={() => setResumeSelect("1")}
                >
                  Alunos Recentes
                </button>

                <button
                  className={`${style.btnResume} ${
                    resumeSelect === "2" ? style.select : style.disabled
                  }`}
                  onClick={() => setResumeSelect("2")}
                >
                  Profesores Recentes
                </button>
              </div>

              <div className={style.listBox}>
                {resumeSelect === "1" ? (
                  students?.students?.length > 0 ? (
                    students.students.map((s) => (
                      <div key={s.id} className={style.recentItem}  onClick={()=>navigate(`/adm/dashboard/alunos/${s.matricula}`)}>
                        <div className={style.left}>
                          <span>{s.nome}</span>
                          <small>{s.curso}</small>
                        </div>
                        <div className={style.dot}></div>
                      </div>
                    ))
                  ) : (
                    <small className={style.empty}>Nenhum aluno recente</small>
                  )
                ) : teachers?.professores?.length > 0 ? (
                  teachers.professores.map((t) => (
                    <div key={t.id} className={style.recentItem} onClick={()=>navigate(`/adm/dashboard/professores/${t.matricula}`)}>
                      <div className={style.left}>
                        <span>{t.nome}</span>
                        <small>{t.disciplina}</small>
                      </div>
                      <div className={style.dot}></div>
                    </div>
                  ))
                ) : (
                  <small className={style.empty}>
                    Nenhum professor recente
                  </small>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
