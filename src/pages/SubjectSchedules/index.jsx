import React, { useEffect } from "react";
import style from "./style.module.css";
import { Addbtn } from "../../componets/ui/Addbtn";
import { CardSubject } from "../../componets/Cards/CardSubject";
import { useAppContext } from "../../context/AppContext";

export const SubjectSchedules = () => {
  const { course } = useAppContext();

  useEffect(() => {
    console.log(course);
  }, [course]);

  const subjects = [
    { discipline: "Lógica de Programação", workload: "60h", modality: "Presencial" },
    { discipline: "Banco de Dados", workload: "60h", modality: "Presencial" },
    { discipline: "Desenvolvimento Web", workload: "60h", modality: "Presencial" },
    { discipline: "Inglês", workload: "60h", modality: "EAD" },
    { discipline: "Matemática", workload: "60h", modality: "EAD" },
    { discipline: "Redes de Computadores", workload: "60h", modality: "Presencial" },
  ];

  return (
    <section className="container">
      <div className={style.subjectsSection}>
        <header className={style.header}>
          <h2>Disciplinas</h2>

          <div className={style.actions}>
            <input
              className={style.search}
              type="text"
              placeholder="Buscar disciplina..."
            />
            <Addbtn text={"+ Nova disciplina"} />
          </div>
        </header>

        <div className={style.subjects}>
          {subjects.map((sub, index) => (
            <CardSubject
              key={index}
              discipline={sub.discipline}
              workload={sub.workload}
              modality={sub.modality}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
