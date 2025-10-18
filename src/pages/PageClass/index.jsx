import React from 'react'
import style from "./style.module.css";
import { FilterIcon, Search } from 'lucide-react';
import { CardClass } from '../../componets/Cards/CardClass';

export const PageClass = () => {
  return (
    <>
        <section className="container">

            <div className={style.headerClass}>
                <h1>Gerenciamento de Turmas</h1>
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
                <button className={style.addBtn}>+ Nova Turma</button>
            </div>

            <section className={style.contentClass}>
                <div className={style.cardsClass}>
                    
                    <div className={style.containerCards}>
                        <p>Turmas</p>
                         <CardClass/>
                         <CardClass/>
                         <CardClass/>
                         <CardClass/>
                         <CardClass/>
                         <CardClass/>
                         <CardClass/>

                    </div>
                </div>
                 <div className={style.recentActivities}>
                    <aside>
                    <p>Atividades Recentes</p>

                       <div>
                        
                       </div>
                    </aside>
                 </div>
            </section>
        </section>
    </>
  )
}
