import React, { useEffect } from "react";
import style from "./style.module.css";
import { StudentsAllReport } from "../../componets/Reports/StudentsAllReport";
import { useAppContext } from "../../context/AppContext";
import { DownloadPDFReports } from "../../componets/Reports/DownloadButtonReports";
import { StudentsAllInactiveReport } from "../../componets/Reports/StudentsAllInactiveReport";
import { useState } from "react";
import api from "../../services/api";

export const Repots = () => {
  const { students } = useAppContext();
  const [studentsInactive, setStudentsInactive] = useState();

  useEffect(()=>{
    const getSyudentsInactive = async()=>{
        try{
            const response = await api.get('/alunos/relatorios/inactive');
            console.log('alunos inativos:', response.data)
            setStudentsInactive(response.data)
        }catch(err){
            console.log(err)
        }
    }
    getSyudentsInactive();
  },[])



  return (
    <section className='container'>
      <h1 className={style.title}>Relatórios</h1>

      <div className={style.sectionGrid}>
        
        {/* ALUNOS */}
        <div className={style.reportSection}>
          <h2>Alunos</h2>
          <div className={style.cardList}>
              <div className={style.card}>
                <DownloadPDFReports
                  name={"All_Students"}
                  title={'Relatório Geral de Alunos'}
                  document={<StudentsAllReport students={students?.students}  />}
                />
              </div>
              <div className={style.card}>
                <DownloadPDFReports
                  name={"All_Students"}
                  title={'Relatório Geral de Alunos Ativos'}

                  document={<StudentsAllReport students={students?.students} />}
                />
              </div>
              <div className={style.card}>
                <DownloadPDFReports
                  name={"All_Students_Inactive"}
                  title={'Relatório Geral de Alunos Inativos'}
                  document={<StudentsAllInactiveReport students={studentsInactive?.students} />}
                />
              </div>
              <div className={style.card}>
                <DownloadPDFReports
                  name={"All_Students"}
                  title={'Relatório Geral de Alunos Por Turma'}
                  document={<StudentsAllReport students={students?.students} />}
                />
              </div>
              <div className={style.card}>
                <DownloadPDFReports
                  name={"All_Students"}
                  title={'Relatório Geral de Alunos Por Curso'}
                  document={<StudentsAllReport students={students?.students} />}
                />
              </div>
          </div>
        </div>

        {/* PROFESSORES */}
        <div className={style.reportSection}>
          <h2>Professores</h2>
          <div className={style.cardList}>
              <div className={style.card}>
                <DownloadPDFReports
                  name={"All_Students"}
                  title={'Relatório Geral de Professores'}
                  document={<StudentsAllReport students={students?.students}  />}
                />
              </div>
              <div className={style.card}>
                <DownloadPDFReports
                  name={"All_Students"}
                  title={'Relatório Geral de Professores Ativos'}

                  document={<StudentsAllReport students={students?.students} />}
                />
              </div>
              <div className={style.card}>
                <DownloadPDFReports
                  name={"All_Students"}
                  title={'Relatório Geral de Professores Inativos'}
                  document={<StudentsAllReport students={students?.students} />}
                />
              </div>
              <div className={style.card}>
                <DownloadPDFReports
                  name={"All_Students"}
                  title={'Relatório de Professores Por disciplinas'}
                  document={<StudentsAllReport students={students?.students} />}
                />
              </div>
          </div>
        </div>

        {/* TURMAS */}
        <div className={style.reportSection}>
          <h2>Turmas</h2>
          <div className={style.cardList}>
              <div className={style.card}>
                <DownloadPDFReports
                  name={"All_Students"}
                  title={'Relatório Geral de Turmas'}
                  document={<StudentsAllReport students={students?.students}  />}
                />
              </div>
              <div className={style.card}>
                <DownloadPDFReports
                  name={"All_Students"}
                  title={'Relatório Geral de Turmas Ativos'}

                  document={<StudentsAllReport students={students?.students} />}
                />
              </div>
              <div className={style.card}>
                <DownloadPDFReports
                  name={"All_Students"}
                  title={'Relatório Geral de Turmas Inativos'}
                  document={<StudentsAllReport students={students?.students} />}
                />
              </div>
              <div className={style.card}>
                <DownloadPDFReports
                  name={"All_Students"}
                  title={'Relatório Geral de Turmas Por curso'}
                  document={<StudentsAllReport students={students?.students} />}
                />
              </div>
          </div>
        </div>

      </div>
    </section>
  );
};
