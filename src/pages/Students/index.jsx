import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { FiltersFast } from "../../componets/FiltersFast";
import { Addbtn } from "../../componets/ui/Addbtn";
import { NewStudent } from "../../componets/Modals/NewStudent";
import { Eye, FilterIcon, Search, SwitchCamera, Trash } from "lucide-react";
import api from "../../services/api";
import { useAppContext } from "../../context/AppContext";
import { PaginatorStudents } from "../../componets/Paginations/PaginatorStudents";
import { CardNotifications } from "../../componets/Cards/CardNotifications";
import { useNavigate } from "react-router-dom";

export const Students = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { students, setStudents, classes } = useAppContext();
  const [resultSearch, setResultSearch] = useState([]);
  const navigator = useNavigate();
  const [dataSearch, setDataSearch] = useState({
    studentName: "",
  });

  const pages = Math.ceil(students?.totalStudents / 10);

  useEffect(() => {
    console.log(students);
  }, [students]);

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
      const response = await api.get("/alunos/search", {
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
        <CardNotifications />

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
                  placeholder="Pesquisar Sala"
                  autoComplete="off"
                  onChange={handleObj}
                  name="studentName"
                  value={dataSearch.studentName}
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
                  {resultSearch.length > 0
                    ? resultSearch.map((result) => (
                        <tr key={result.id}>
                          <td>{result.matricula}</td>
                          <td>{result.nome}</td>
                          <td>{result.turma?.curso?.nome}</td>
                          <td>{result.turma?.nome}</td>
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
                                  `/adm/dashboard/alunos/${result.matricula}`
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
                    : students?.students?.map((student) => (
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
                            <button
                              className={style.btnAction}
                              onClick={() => {
                                navigator(
                                  `/adm/dashboard/alunos/${student.matricula}`
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
