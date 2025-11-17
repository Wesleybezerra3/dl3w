import React from "react";
import style from "./style.module.css";
import { FilterIcon, Search } from "lucide-react";
import { CardClass } from "../../componets/Cards/CardClass";
import { useAppContext } from "../../context/AppContext";

export const PageClass = () => {
  const { classes } = useAppContext();
  return (
    <>
      <section className="container">
        <div className={style.headerClass}>
          <h1>Gerenciamento de Turmas</h1>
          <div className={style.searchClass}>
            <button className={style.btnFilter}>
              <FilterIcon size={16} />
            </button>
            <input
              type="text"
              placeholder="Pesquisar Turma"
              autoComplete="off"
            />
            <div>
              <button className={style.btnSearch}>
                <Search size={16} />
              </button>
            </div>
          </div>
          <button className={style.addBtn}>+ Nova Turma</button>
        </div>

        <section className={style.contentClass}>
          <div className={style.cardsClass}>
            <div className={style.containerCards}>
              <p>Turmas</p>
              <div className={style.listCards}>
                {classes.map((classe) => (
                  <CardClass
                    key={classe.id}
                    turmaName={classe?.nome}
                    cursoName={classe?.curso?.nome}
                    salaName={classe?.sala?.nome}
                    turno={classe?.turno}
                    qtdAlunos={classe.qtd_alunos}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* <div className={style.recentActivities}>
                    <aside>
                    <p>Atividades Recentes</p>

                       <div>
                        
                       </div>
                    </aside>
                 </div> */}
        </section>
      </section>
    </>
  );
};
