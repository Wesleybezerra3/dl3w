import React from "react";
import style from "./style.module.css";
import { CardDiscipline } from "../../../componets/Cards/CardDiscipline";
import { useAppContext } from "../../../context/AppContext";

export const MyCourse = () => {
  const { user } = useAppContext();
  const disciplinas = user?.turma?.curso?.disciplinas;
  return (
    <>
      <section className='container'>
        {disciplinas &&
          disciplinas.map((disciplina) => (
            <CardDiscipline
              key={disciplina.id}
              teacherName={disciplina.professores[0]?.nome}
              disciplineName={disciplina.nome}
              modalidade={disciplina.modalidade}
            />
          ))}
      </section>
    </>
  );
};
