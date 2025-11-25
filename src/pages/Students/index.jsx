import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { FiltersFast } from "../../componets/FiltersFast";
import { Addbtn } from "../../componets/ui/Addbtn";
import { GraficPie } from "../../componets/GraficPie";
import { NewStudent } from "../../componets/Modals/NewStudent";
import { Eye, FilterIcon, Search, SwitchCamera, Trash } from "lucide-react";
import api from "../../services/api";
import { useAppContext } from "../../context/AppContext";
import { PaginatorStudents } from "../../componets/Paginations/PaginatorStudents";
import { CardNotifications} from "../../componets/Cards/CardNotifications";
import { useNavigate } from "react-router-dom";

export const Students = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { students, setStudents, classes } = useAppContext();
  const [resultSearch, setResultSearch] = useState([]);
  const navigator = useNavigate();

  const pages = Math.ceil(students?.totalStudents / 10);

  useEffect(() => {
    console.log(students);
  }, [students]);

  return (
    <>
      <section className="container">
    <CardNotifications/>

        <NewStudent visible={isOpen} onClose={() => setIsOpen(false)} />

        <div className={style.layout}>
          <section className={style.containerFilters}>
            {/* <FiltersFast /> */}
            {/* <GraficPie/> */}
          </section>
          <section className={style.containerTable}>
            <div className={style.headerTable}>
              <p>Alunos</p>
              <div className={style.searchClass}>
                {/* <button className={style.btnFilter}>
                  <FilterIcon size={16} />
                </button> */}
                <input
                  type="text"
                  placeholder="Pesquisar Aluno"
                  autoComplete="off"
                />
                <div>
                  <button className={style.btnSearch}>
                    <Search size={16} />
                  </button>
                </div>
              </div>
              <button
                className={style.addBtn}
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                + Novo Aluno
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
                  {students?.students?.map((student) => (
                    <tr key={student.id}>
                      <td>{student.matricula}</td>
                      <td>{student.nome}</td>
                      <td>{student.turma?.curso?.nome}</td>
                      <td>{student.turma?.nome}</td>
                      <td
                        style={
                          student.situacao === "ativo"
                            ? { color: "green" }
                            : { color: "red" }
                        }
                      >
                        {student.situacao}
                      </td>
                      <td>
                        <button className={style.btnAction} onClick={()=>{
                          navigator(`/adm/dashboard/alunos/${student.matricula}`)
                        }} title="Visualizar"><Eye className={style.icon} size={16} /></button>

                         <button className={style.btnAction} title="Alterar Estado">
                        <SwitchCamera className={style.icon} size={16}/>
                         </button> 
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={style.containerPaginator}>
              {Array.from({ length: Math.max(0, pages) }).map((_, i) => (
                <PaginatorStudents key={i} page={i + 1} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
