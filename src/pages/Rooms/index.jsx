import React, { useState } from "react";
import style from "./style.module.css";
import { FilterIcon, Search } from "lucide-react";
import { CardRoom } from "../../componets/Cards/CardRoom";
import { useAppContext } from "../../context/AppContext";
import { NewSala } from "../../componets/Modals/NewSala";

export const Rooms = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { rooms } = useAppContext();
  return (
    <>
      <NewSala visible={isOpen} onClose={() => setIsOpen(false)} />
      <section className="container">
        <div className={style.headerRoom}>
          <h1>Gerenciamento de Salas</h1>
          <div className={style.searchRoom}>
            <input
              type="text"
              placeholder="Pesquisar Sala"
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
            + Nova Sala
          </button>
        </div>
        <div className={style.filters}>
          <p>Filtros Rapidos</p>
          <div className={style.filterOptions}>
            <select name="" id="">
              <option value="" disabled>
                Status
              </option>
              <option value="active">Ativo</option>
              <option value="inactive">Inativo</option>
            </select>
            <select name="capacity" id="capacity">
              <option value="" disabled>
                Capacidade
              </option>
              <option value="small">Pequena {"(1-10)"}</option>
              <option value="medium">Média {"(11-30)"}</option>
              <option value="large">Grande {"(31+)"}</option>
            </select>

            <button className={style.applyBtn}>Aplicar Filtros</button>
          </div>
        </div>
        <section className={style.roomList}>
          {/* Lista de salas será renderizada aqui */}
          {rooms.map((room) => (
            <CardRoom
              key={room?.id}
              nameRoom={room?.nome}
              capacidade={room?.capacidade}
              location={room?.localizacao}
              qtdturma={room?.turmas.length}
            />
          ))}
        </section>
      </section>
    </>
  );
};
