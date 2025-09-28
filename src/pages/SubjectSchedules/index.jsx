import React, { use, useEffect } from "react";
import style from "./style.module.css";
import { Addbtn } from "../../componets/ui/Addbtn";
import { CardSubject } from "../../componets/CardSubject";
import { Timetable } from "../../componets/Timetable";
import { useAppContext } from "../../context/AppContext";

export const SubjectSchedules = () => {
  const {course} = useAppContext();

  useEffect(()=>{
    console.log(course);
  },[])
  return (
    <>
      <section className="container">
        <section className={style.subjectsSection}>
          <div className={style.header}>
            <p>Disciplinas</p>
            <div>
              <input type="text" />
            </div>

            <Addbtn text={"+ Nova disciplina"} />
          </div>

          <div className={style.subjects}>
            <CardSubject
              discipline={"Lógica de Programação"}
              workload={"60h"}
              modality={"Presencial"}
            />
            <CardSubject
              discipline={"Banco de Dados"}
              workload={"60h"}
              modality={"Presencial"}
            />
            <CardSubject
              discipline={"Desenvolvimento Web"}
              workload={"60h"}
              modality={"Presencial"}
            />
            <CardSubject
              discipline={"Inglês"}
              workload={"60h"}
              modality={"EAD"}
            />
            <CardSubject
              discipline={"Matemática"}
              workload={"60h"}
              modality={"EAD"}
            />
            <CardSubject
              discipline={"Redes de Computadores"}
              workload={"60h"}
              modality={"Presencial"}
            />
            <CardSubject
              discipline={"Redes de Computadores"}
              workload={"60h"}
              modality={"Presencial"}
            />
            <CardSubject
              discipline={"Redes de Computadores"}
              workload={"60h"}
              modality={"Presencial"}
            />
            <CardSubject
              discipline={"Redes de Computadores"}
              workload={"60h"}
              modality={"Presencial"}
            />
          </div>
        </section>

        <section className={style.schedulesSection}>
          <div className={style.header}>
            <p>Horários</p>
            <div>
              <input type="text" />
            </div>
            <Addbtn text={"+ Novo Horário"} />
          </div>

          <div className={style.schedules}>
            <Timetable/>
          </div>
        </section>
      </section>
    </>
  );
};
