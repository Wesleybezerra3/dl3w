import React, { useState } from "react";
import style from "./style.module.css";
import { FilterIcon, Search } from "lucide-react";
import { CardRoom } from "../../componets/Cards/CardRoom";
import { useAppContext } from "../../context/AppContext";
import { NewSala } from "../../componets/Modals/NewSala";
import api from "../../services/api";
import { PaginatorRoom } from "../../componets/Paginations/PaginatorRoom";

export const Rooms = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { rooms } = useAppContext();
  const [resultSearch, setResultSearch] = useState([]);

  const pages = Math.ceil(rooms?.total_rooms / 8);

  const [dataSearch, setDataSearch] = useState({
    roomName: "",
  });
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
      const response = await api.get("/salas/search", {
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
      <NewSala visible={isOpen} onClose={() => setIsOpen(false)} />
      <section className="container">
        <div className={style.headerRoom}>
          <h1>Gerenciamento de Salas</h1>
          <div className={style.searchRoom}>
            <input
              type="text"
              placeholder="Pesquisar Sala"
              autoComplete="off"
              onChange={handleObj}
              name="roomName"
              value={dataSearch.roomName}
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
            + Nova Sala
          </button>
        </div>
        {/* <div className={style.filters}>
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
        </div> */}
        <section className={style.roomList}>
          {/* Lista de salas será renderizada aqui */}
          {resultSearch.length > 0
            ? resultSearch.map((result) => (
                <CardRoom
                  key={result?.id}
                  nameRoom={result?.nome}
                  capacidade={result?.capacidade}
                  location={result?.localizacao}
                  qtdturma={result?.turmas?.length}
                />
              ))
            : rooms?.rooms?.map((room) => (
                <CardRoom
                  key={room?.id}
                  nameRoom={room?.nome}
                  capacidade={room?.capacidade}
                  location={room?.localizacao}
                  qtdturma={room?.turma.length}
                />
              ))}
        </section>
        <div className={style.containerPaginator}>
          {Array.from({ length: Math.max(0, pages) }).map((_, i) => (
            <PaginatorRoom key={i} page={i + 1} />
          ))}
        </div>
      </section>
    </>
  );
};
