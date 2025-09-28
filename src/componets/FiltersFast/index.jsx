import React from "react";
import style from "./style.module.css";
export const FiltersFast = () => {
  return (
    <>
      <div className={style.filters}>
        <div className={style.headerFilters}>
          <p>Filtros Rápidos</p>
        </div>
        <div className={style.optionFilters}>
            <div>
                <p>Status</p>
                <select name="status" id="status">
                    <option value="all">Todos</option>
                    <option value="active">Ativos</option>
                    <option value="inactive">Inativos</option>
                </select>
            </div>
            <div>
                <p>Curso</p>
                <select name="curso" id="curso">
                    <option value="all">Todos</option>
                    <option value="active">Ativos</option>
                    <option value="inactive">Inativos</option>
                </select>
            </div>
            
        </div>
        <div className={style.btns}>
            <button>Limpar</button>
            <button>Aplicar</button>
        </div>
      </div>
    </>
  );
};
