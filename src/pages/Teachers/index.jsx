import React, { use, useEffect, useState } from "react";
import style from "./style.module.css";
import { FiltersFast } from "../../componets/FiltersFast";
import { Addbtn } from "../../componets/ui/Addbtn";
import { GraficPie } from "../../componets/GraficPie";
import { FilterIcon, Search } from "lucide-react";
import api from "../../services/api";
import { useAppContext } from "../../context/AppContext";
import { NewTeacher } from "../../componets/Modals/NewTeacher";


export const Teachers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {teachers = []} = useAppContext();

  useEffect(() => {
    console.log(teachers);
  }, [teachers]);
  
  return (
    <>
      <section className="container">
        <NewTeacher visible={isOpen} onClose={() => setIsOpen(false)} />

        <div className={style.layout}>
          <section className={style.containerFilters}>
            <FiltersFast />
            {/* <GraficPie/> */}
          </section>
          <section className={style.containerTable}>
            <div className={style.headerTable}>
              <p>Professores</p>
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
                Novo Professor
              </button>
            </div>
            <div className={style.contentTable}>
              <table className={style.table}>
                <thead>
                  <tr>
                    <th>Matrícula</th>
                    <th>Nome</th>
                    {/* <th>Curso</th> */}
                    {/* <th>Turma</th> */}
                    <th>Titulação</th>
                    <th>Situação</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {teachers.map((teacher) => (
                    <tr key={teacher.id}>
                      <td>{teacher.matricula}</td>
                      <td>{teacher.nome}</td>
                      {/* <td>{teacher.turma?.Curso?.nome}</td> */}
                      {/* <td>{teacher.turma?.nome}</td> */}
                      <td>{teacher.titulacao}</td>  
                      <td style={teacher.situacao === 'ativo' ? {color: 'green'} : {color: 'red'}}>{teacher.situacao}</td>
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
