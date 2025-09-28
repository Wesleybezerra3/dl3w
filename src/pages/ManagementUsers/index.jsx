import React from "react";
import style from "./style.module.css";
import { FiltersFast } from "../../componets/FiltersFast";
import { Addbtn } from "../../componets/ui/Addbtn";

export const ManagementUsers = () => {
return (
    <>
        <section className="container">
            <div className={style.layout}>
                <section className={style.containerFilters}>
                    <div className={style.selectUser}>
                        <button>Alunos</button>
                        <button>Professores</button>
                    </div>
                    <FiltersFast />
                </section>
                <section className={style.containerTable}>
                    <div className={style.headerTable}>
                        <p>
                            Alunos
                        </p>
                        <input type="text" />
                        <Addbtn text={"+ Novo Aluno"}/>
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
                                <tr>
                                    <td>2023001</td>
                                    <td>João Silva</td>
                                    <td>Análise e Desenvolvimento de sistemas</td>
                                    <td>0Ad20-4° - N</td>
                                    <td>Matriculado</td>
                                    <td>
                                         <button className={style.btnTable}>Editar</button>
                                        <button className={style.btnTable}>Excluir</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2023002</td>
                                    <td>Maria Souza</td>
                                    <td>Análise e Desenvolvimento de sistemas</td>
                                    <td>0Ad20-4° - N</td>
                                    <td>Graduado</td>
                                    <td>
                                         <button className={style.btnTable}>Editar</button>
                                        <button className={style.btnTable}>Excluir</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2023003</td>
                                    <td>Wesley Santos</td>
                                    <td>Análise e Desenvolvimento de sistemas</td>
                                    <td>0Ad20-4° - N</td>
                                    <td>Reprovado</td>
                                    <td>
                                         <button className={style.btnTable}>Editar</button>
                                        <button className={style.btnTable}>Excluir</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2023004</td>
                                    <td>Ricardo Palmeira</td>
                                    <td>Análise e Desenvolvimento de sistemas</td>
                                    <td>0A130-2° - M</td>
                                    <td>Graduado</td>
                                    <td>
                                        <button className={style.btnTable}>Editar</button>
                                        <button className={style.btnTable}>Excluir</button>
                                    </td>
                                </tr>
                                 <tr>
                                    <td>2023001</td>
                                    <td>João Silva</td>
                                    <td>Análise e Desenvolvimento de sistemas</td>
                                    <td>0Ad20-4° - N</td>
                                    <td>Matriculado</td>
                                    <td>
                                         <button className={style.btnTable}>Editar</button>
                                        <button className={style.btnTable}>Excluir</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2023002</td>
                                    <td>Maria Souza</td>
                                    <td>Análise e Desenvolvimento de sistemas</td>
                                    <td>0Ad20-4° - N</td>
                                    <td>Graduado</td>
                                    <td>
                                         <button className={style.btnTable}>Editar</button>
                                        <button className={style.btnTable}>Excluir</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2023003</td>
                                    <td>Wesley Santos</td>
                                    <td>Análise e Desenvolvimento de sistemas</td>
                                    <td>0Ad20-4° - N</td>
                                    <td>Reprovado</td>
                                    <td>
                                         <button className={style.btnTable}>Editar</button>
                                        <button className={style.btnTable}>Excluir</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2023004</td>
                                    <td>Ricardo Palmeira</td>
                                    <td>Análise e Desenvolvimento de sistemas</td>
                                    <td>0A130-2° - M</td>
                                    <td>Graduado</td>
                                    <td>
                                        <button className={style.btnTable}>Editar</button>
                                        <button className={style.btnTable}>Excluir</button>
                                    </td>
                                </tr>
                                 <tr>
                                    <td>2023001</td>
                                    <td>João Silva</td>
                                    <td>Análise e Desenvolvimento de sistemas</td>
                                    <td>0Ad20-4° - N</td>
                                    <td>Matriculado</td>
                                    <td>
                                         <button className={style.btnTable}>Editar</button>
                                        <button className={style.btnTable}>Excluir</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2023002</td>
                                    <td>Maria Souza</td>
                                    <td>Análise e Desenvolvimento de sistemas</td>
                                    <td>0Ad20-4° - N</td>
                                    <td>Graduado</td>
                                    <td>
                                         <button className={style.btnTable}>Editar</button>
                                        <button className={style.btnTable}>Excluir</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2023003</td>
                                    <td>Wesley Santos</td>
                                    <td>Análise e Desenvolvimento de sistemas</td>
                                    <td>0Ad20-4° - N</td>
                                    <td>Reprovado</td>
                                    <td>
                                         <button className={style.btnTable}>Editar</button>
                                        <button className={style.btnTable}>Excluir</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2023004</td>
                                    <td>Ricardo Palmeira</td>
                                    <td>Análise e Desenvolvimento de sistemas</td>
                                    <td>0A130-2° - M</td>
                                    <td>Graduado</td>
                                    <td>
                                        <button className={style.btnTable}>Editar</button>
                                        <button className={style.btnTable}>Excluir</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </section>
    </>
);
};
