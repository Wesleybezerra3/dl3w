import React, { use, useEffect, useState } from "react";
import style from "./style.module.css";
import { FiltersFast } from "../../componets/FiltersFast";
import { Addbtn } from "../../componets/ui/Addbtn";
import { GraficPie } from "../../componets/GraficPie";
import { NewStudent } from "../../componets/Modals/NewStudent";
import { FilterIcon, Search } from "lucide-react";
import api from "../../services/api";
import { useAppContext } from "../../context/AppContext";


export const Students = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { students, setStudents, classes } = useAppContext();
  

  useEffect(() => {
    console.log(students);
  }, [students]);
  
  return (
    <>
      <section className="container">
        <NewStudent visible={isOpen} onClose={() => setIsOpen(false)} />

        <div className={style.layout}>
          <section className={style.containerFilters}>
            <FiltersFast />
            {/* <GraficPie/> */}
          </section>
          <section className={style.containerTable}>
            <div className={style.headerTable}>
              <p>Alunos</p>
              <div className={style.searchClass}>
                        <button className={style.btnFilter}>
                            <FilterIcon size={16}/>
                        </button>
                    <input type="text" placeholder='Pesquisar Turma' autoComplete='off'/>
                    <div>
                        <button className={style.btnSearch}>
                            <Search size={16}/>
                        </button>
                    </div>
                </div>
              <button
                className={style.addBtn}
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                Novo Aluno
              </button>
            </div>
            <div className={style.contentTable}>
              <table className={style.table}>
                <thead>
                  <tr>
                    <th>Matrícula</th>
                    <th>Nome</th>
                    <th>Curso</th>
                    <th>Turma</th>
                    <th>Situação</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id}>
                      <td>{student.matricula}</td>
                      <td>{student.nome}</td>
                      <td>{student.turma?.Curso?.nome}</td>
                      <td>{student.turma?.nome}</td>
                      <td>{student.situacao}</td>
                      <td>
                        <button className={style.btnTable}>Editar</button>
                        <button className={style.btnTable}>Excluir</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
