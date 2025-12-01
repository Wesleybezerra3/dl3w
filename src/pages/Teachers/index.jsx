import React, { use, useEffect, useState } from "react";
import style from "./style.module.css";
import { FiltersFast } from "../../componets/FiltersFast";
import { Addbtn } from "../../componets/ui/Addbtn";

import { Eye, FilterIcon, Search, SwitchCamera } from "lucide-react";
import api from "../../services/api";
import { useAppContext } from "../../context/AppContext";
import { NewTeacher } from "../../componets/Modals/NewTeacher";
import { PaginatorTeacher } from "../../componets/Paginations/PaginatorTeacher";
import { useNavigate } from "react-router-dom";

export const Teachers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { teachers = [] } = useAppContext();
  const navigator = useNavigate();

  const pages = Math.ceil(teachers?.totalTeachers / 10);
  const [resultSearch, setResultSearch] = useState([]);

  const [dataSearch, setDataSearch] = useState({
    teacherName: "",
  });

  useEffect(() => {
    console.log(teachers);
  }, [teachers]);

  const handleObj = (e) => {
    const { name, value } = e.target;
    setDataSearch({ ...dataSearch, [name]: value });
  };

  const searchRoom = async (data) => {
    try {
      if (Object.keys(data).length === 0) {
        setResultSearch([]);
        return;
      }
      console.log(data);
      const response = await api.get("/professores/search", {
        params: data,
      });
      console.log(response.data);
      setResultSearch(Array.isArray(response.data) ? response.data : []);
    } catch (err) {
      console.log(err);
      setResultSearch([]);
    }
  };

  return (
    <>
      <section className="container">
        <NewTeacher visible={isOpen} onClose={() => setIsOpen(false)} />

        <div className={style.layout}>
      
          <section className={style.containerTable}>
            <div className={style.headerTable}>
              <p>Professores</p>
              <div className={style.searchClass}>
                {/* <button className={style.btnFilter}>
                  <FilterIcon size={16} />
                </button> */}
                <input
                  type="text"
                  placeholder="Pesquisar Sala"
                  autoComplete="off"
                  onChange={handleObj}
                  name="teacherName"
                  value={dataSearch.teacherNameName}
                />
                <div>
                  <button
                    className={style.btnSearch}
                    onClick={() => searchRoom(dataSearch)}
                  >
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
                + Novo Professor
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
                  {resultSearch.length > 0
                    ? resultSearch.map((result) => (
                        <tr key={result.id}>
                          <td>{result.matricula}</td>
                          <td>{result.nome}</td>
                          <td>{result.titulacao}</td>
                          <td
                            style={
                              result.situacao === "ativo"
                                ? { color: "green" }
                                : { color: "red" }
                            }
                          >
                            {result.situacao}
                          </td>
                          <td>
                            <button
                              className={style.btnAction}
                              onClick={() => {
                                navigator(
                                  `/adm/dashboard/professores/${result.matricula}`
                                );
                              }}
                              title="Visualizar"
                            >
                              <Eye className={style.icon} size={16} />
                            </button>

                            <button
                              className={style.btnAction}
                              title="Alterar Estado"
                            >
                              <SwitchCamera className={style.icon} size={16} />
                            </button>
                          </td>
                        </tr>
                      ))
                    : teachers?.professores?.map((teacher) => (
                        <tr key={teacher.id}>
                          <td>{teacher.matricula}</td>
                          <td>{teacher.nome}</td>
                          {/* <td>{teacher.turma?.Curso?.nome}</td> */}
                          {/* <td>{teacher.turma?.nome}</td> */}
                          <td>{teacher.titulacao}</td>
                          <td
                            style={
                              teacher.situacao === "ativo"
                                ? { color: "green" }
                                : { color: "red" }
                            }
                          >
                            {teacher.situacao}
                          </td>
                          <td>
                            <td>
                              <button
                                className={style.btnAction}
                                onClick={() => {
                                  navigator(
                                    `/adm/dashboard/professores/${teacher.matricula}`
                                  );
                                }}
                                title="Visualizar"
                              >
                                <Eye className={style.icon} size={16} />
                              </button>
                              <button
                                className={style.btnAction}
                                title="Alterar Estado"
                              >
                                <SwitchCamera
                                  className={style.icon}
                                  size={16}
                                />
                              </button>
                            </td>
                          </td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
            <div className={style.containerPaginator}>
              {Array.from({ length: Math.max(0, pages) }).map((_, i) => (
                <PaginatorTeacher key={i} page={i + 1} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
